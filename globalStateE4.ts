import { IniMap } from "./ini";

interface LfoConfig {
  index: number;
  output: string;
  level: string;
  hz: string;
}

const MAX_LFOS = 8;
const LFO_SELECT = "_LFO_SELECT";

function createLfoState(index: number): LfoConfig {
  return {
    index,
    output: `O${index + 1}`,
    level: `_LEVEL_${index + 1}`,
    hz: `_HZ_${index + 1}`,
  };
}

function configureLfo(ini: IniMap, config: LfoConfig): void {
  const lfo = ini.setSection("lfo");
  ini.set(lfo.id ?? lfo.sec, "sawtooth", config.output);
  ini.set(lfo.id ?? lfo.sec, "level", config.level);
  ini.set(lfo.id ?? lfo.sec, "hz", `${config.hz} * 100`);
}

function configureFaders(ini: IniMap, config: LfoConfig, lfoSelect: string): void {
  // level fader
  const levelFader = ini.setSection("motorfader");
  ini.set(levelFader.id ?? levelFader.sec, "fader", "1");
  ini.set(levelFader.id ?? levelFader.sec, "select", lfoSelect);
  ini.set(levelFader.id ?? levelFader.sec, "selectat", `${config.index + 1}`);
  ini.set(levelFader.id ?? levelFader.sec, "output", config.level);

  // hz fader
  const hzFader = ini.setSection("motorfader");
  ini.set(hzFader.id ?? hzFader.sec, "fader", "1");
  ini.set(hzFader.id ?? hzFader.sec, "select", lfoSelect);
  ini.set(hzFader.id ?? hzFader.sec, "selectat", `${config.index + 1}`);
  ini.set(hzFader.id ?? hzFader.sec, "output", config.hz);
}

const ini = new IniMap();

ini.setComment("# LABELS: master=18");

ini.setSection("p2b8");
ini.setSection("e4");
ini.setSection("m4");

// Configure encoder for LFO selection
const enc = ini.setSection("encoder");
ini.set(enc.id ?? enc.sec, "discrete", `${MAX_LFOS}`);
ini.set(enc.id ?? enc.sec, "encoder", "E2.1");
ini.set(enc.id ?? enc.sec, "color", LFO_SELECT);
ini.set(enc.id ?? enc.sec, "output", LFO_SELECT);

// Configure LFOs and their faders
Array.from({ length: MAX_LFOS }, (_, i) => {
  const config = createLfoState(i);
  configureLfo(ini, config);
  configureFaders(ini, config, LFO_SELECT);
});

console.log(ini.toString());
