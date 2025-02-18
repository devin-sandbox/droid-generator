/// <reference types="bun-types" />
import { IniMap } from "./ini";
interface LfoConfig {
  index: number;
  output: string;
  level: string;
  hz: string;
  waveform: string;  // For selecting between waveforms (0-6)
}

const MAX_ALLOWED_LFOS = 7;  // Using O1-O7 for LFOs
const LFO_SELECT = "_LFO_SELECT";
const LAYER_SELECT = "_LAYER_SELECT";
const LAYER_LFO = 0;
const LAYER_MIXER = 1;
const ITEMS_PER_PAGE = 4;  // Maximum items to show per page

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
  };
}

function configureLfo(ini: IniMap, config: LfoConfig): void {
  const lfo = ini.setSection("lfo");
  ini.set(lfo.id ?? lfo.sec, "output", config.output);
  ini.set(lfo.id ?? lfo.sec, "waveform", config.waveform);
  ini.set(lfo.id ?? lfo.sec, "level", config.level);
  ini.set(lfo.id ?? lfo.sec, "hz", `${config.hz} * 100`);
}

function configureMixers(ini: IniMap, config: LfoConfig): void {
  const mixer = ini.setSection("mixer");
  ini.set(mixer.id ?? mixer.sec, "output", "O8");  // Fixed mixer output
  ini.set(mixer.id ?? mixer.sec, `input${config.index + 1}`, `${config.output} * _FADER_${config.index + 1}_OUT`);
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

function configureMixerFaders(ini: IniMap, config: LfoConfig, layerSelect: string): void {
  const weightFader = ini.setSection("motorfader");
  ini.set(weightFader.id ?? weightFader.sec, "fader", `${config.index + 4}`);  // Use faders 4-7 for mixer weights
  ini.set(weightFader.id ?? weightFader.sec, "select", layerSelect);
  ini.set(weightFader.id ?? weightFader.sec, "selectat", `${LAYER_MIXER}`);
  ini.set(weightFader.id ?? weightFader.sec, "output", `_FADER_${config.index + 1}_OUT`);
}

function generatePatch(numLfos: number): string {
  const ini = new IniMap();
  numLfos = validateNumLfos(numLfos);

  ini.setComment("# LABELS: master=18");

  ini.setSection("p2b8");
  ini.setSection("e4");
  ini.setSection("m4");

  // Configure encoder for layer selection and pagination
  const enc = ini.setSection("encoder");
  ini.set(enc.id ?? enc.sec, "encoder", "E2.1");
  ini.set(enc.id ?? enc.sec, "button", "1");  // Enable button functionality
  ini.set(enc.id ?? enc.sec, "buttonmode", "toggle");  // Toggle between layers
  ini.set(enc.id ?? enc.sec, "output", LFO_SELECT);  // Controls LFO selection
  ini.set(enc.id ?? enc.sec, "buttonoutput", LAYER_SELECT);  // Button press controls layer selection
  ini.set(enc.id ?? enc.sec, "color", "0.6");  // Red for LFO layer
  ini.set(enc.id ?? enc.sec, "negativecolor", "0.2");  // Cyan for mixer layer



  // Configure pagination for LFO layer (4 items per page)
  const totalPages = Math.ceil(numLfos / ITEMS_PER_PAGE);
  const currentPage = Math.floor(parseInt(LFO_SELECT) / ITEMS_PER_PAGE);  // Use LFO selection for page
  const startIdx = currentPage * ITEMS_PER_PAGE;
  const endIdx = Math.min(startIdx + ITEMS_PER_PAGE, numLfos);
  const itemsOnPage = endIdx - startIdx;

  // Update encoder discrete range for pagination
  ini.set(enc.id ?? enc.sec, "discrete", `${numLfos}`);  // Total number of selectable LFOs

  // Configure all LFOs
  Array.from({ length: numLfos }, (_, i) => {
    const config = createLfoState(i);
    configureLfo(ini, config);
    configureFaders(ini, config, LFO_SELECT);
  });

  // Configure mixer with all available LFOs
  Array.from({ length: Math.min(numLfos, ITEMS_PER_PAGE) }, (_, i) => {
    const config = createLfoState(i);
    configureMixers(ini, config);
    configureMixerFaders(ini, config, LAYER_SELECT);
  });

  return ini.toString();
}

// Get number of LFOs from command line or use default
const numLfos = Bun.argv[2] ? parseInt(Bun.argv[2], 10) : MAX_ALLOWED_LFOS;
console.log(generatePatch(numLfos));
