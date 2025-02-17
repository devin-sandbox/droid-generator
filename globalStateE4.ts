import { IniMap } from "./ini";

interface LfoConfig {
  index: number;
  output: string;
  level: string;
  hz: string;
  waveform: string;  // For selecting between waveforms (0-6)
  freqMod?: string;  // Optional frequency modulation output
}

const MAX_ALLOWED_LFOS = 8;
const LFO_SELECT = "_LFO_SELECT";

function validateNumLfos(num: number): number {
  if (isNaN(num) || num < 1 || num > MAX_ALLOWED_LFOS) {
    throw new Error(`Number of LFOs must be between 1 and ${MAX_ALLOWED_LFOS}`);
  }
  return num;
}

function createLfoState(index: number): LfoConfig {
  return {
    index,
    output: `O${index + 1}`,
    level: `_LEVEL_${index + 1}`,
    hz: `_HZ_${index + 1}`,
    waveform: `_WAVEFORM_${index + 1}`,
    freqMod: `_FREQ_MOD_${index + 1}`,
  };
}

function configureLfo(ini: IniMap, config: LfoConfig): void {
  const lfo = ini.setSection("lfo");
  ini.set(lfo.id ?? lfo.sec, "output", config.output);
  ini.set(lfo.id ?? lfo.sec, "waveform", config.waveform);
  ini.set(lfo.id ?? lfo.sec, "level", config.level);
  // Use modulated frequency if available, otherwise use base frequency
  ini.set(lfo.id ?? lfo.sec, "hz", `${config.freqMod ?? config.hz} * 100`);
}

function configureMixers(ini: IniMap, config: LfoConfig, modSource: string): void {
  // Frequency modulation mixer using MASTER18
  const freqMixer = ini.setSection("mixer");
  ini.set(freqMixer.id ?? freqMixer.sec, "input1", modSource);
  ini.set(freqMixer.id ?? freqMixer.sec, "input2", config.hz);
  ini.set(freqMixer.id ?? freqMixer.sec, "output", "MASTER18");
}

function configureFaders(ini: IniMap, config: LfoConfig, lfoSelect: string): void {
  // level fader
  const levelFader = ini.setSection("motorfader");
  ini.set(levelFader.id ?? levelFader.sec, "fader", "1");
  ini.set(levelFader.id ?? levelFader.sec, "select", lfoSelect);
  ini.set(levelFader.id ?? levelFader.sec, "selectat", `${config.index}`);
  ini.set(levelFader.id ?? levelFader.sec, "output", config.level);

  // hz fader
  const hzFader = ini.setSection("motorfader");
  ini.set(hzFader.id ?? hzFader.sec, "fader", "2");
  ini.set(hzFader.id ?? hzFader.sec, "select", lfoSelect);
  ini.set(hzFader.id ?? hzFader.sec, "selectat", `${config.index}`);
  ini.set(hzFader.id ?? hzFader.sec, "output", config.hz);

  // waveform fader
  const waveformFader = ini.setSection("motorfader");
  ini.set(waveformFader.id ?? waveformFader.sec, "fader", "3");
  ini.set(waveformFader.id ?? waveformFader.sec, "select", lfoSelect);
  ini.set(waveformFader.id ?? waveformFader.sec, "selectat", `${config.index}`);
  ini.set(waveformFader.id ?? waveformFader.sec, "output", config.waveform);
  ini.set(waveformFader.id ?? waveformFader.sec, "notches", "7");  // 0-6 for waveform selection
}

function generatePatch(numLfos: number): string {
  const ini = new IniMap();
  numLfos = validateNumLfos(numLfos);

  ini.setComment("# LABELS: master=18");

  ini.setSection("p2b8");
  ini.setSection("e4");
  ini.setSection("m4");

  // Configure encoder for LFO selection
  const enc = ini.setSection("encoder");
  ini.set(enc.id ?? enc.sec, "discrete", `${numLfos}`);
  ini.set(enc.id ?? enc.sec, "encoder", "E2.1");
  ini.set(enc.id ?? enc.sec, "color", LFO_SELECT);
  ini.set(enc.id ?? enc.sec, "output", LFO_SELECT);

  // Configure LFOs and their faders
  Array.from({ length: numLfos }, (_, i) => {
    const config = createLfoState(i);
    configureLfo(ini, config);
    configureFaders(ini, config, LFO_SELECT);
    if (i > 0) {  // First LFO can't be modulated
      // Use previous LFO's output to modulate this LFO's frequency
      configureMixers(ini, config, `O${i}`);
    }
  });

  return ini.toString();
}

// Get number of LFOs from command line or use default
const numLfos = process.argv[2] ? parseInt(process.argv[2], 10) : MAX_ALLOWED_LFOS;
console.log(generatePatch(numLfos));
