import { IniMap } from "./ini";
import type { LFOConfig } from './types/circuits/modulation/lfo';

interface ClockConfig {
  output: string;      // Clock output (O1)
  hz: string;          // Clock frequency control
  level: string;       // Clock level control
}

function generateClockPatch(): string {
  const ini = new IniMap();
  
  ini.setComment("# LABELS: master=18");
  ini.setSection("p2b8");
  ini.setSection("e4");
  ini.setSection("m4");

  // Configure clock LFO
  const lfo = ini.setSection("lfo");
  ini.set(lfo.id ?? lfo.sec, "output", "O1");
  ini.set(lfo.id ?? lfo.sec, "waveform", "0");  // Square wave for clock
  ini.set(lfo.id ?? lfo.sec, "level", "_CLOCK_LEVEL");
  ini.set(lfo.id ?? lfo.sec, "hz", "_CLOCK_HZ * 100");

  // Configure clock speed fader
  const speedFader = ini.setSection("motorfader");
  ini.set(speedFader.id ?? speedFader.sec, "fader", "1");
  ini.set(speedFader.id ?? speedFader.sec, "output", "_CLOCK_HZ");

  // Configure clock level fader
  const levelFader = ini.setSection("motorfader");
  ini.set(levelFader.id ?? levelFader.sec, "fader", "2");
  ini.set(levelFader.id ?? levelFader.sec, "output", "_CLOCK_LEVEL");

  return ini.toString();
}

console.log(generateClockPatch());
