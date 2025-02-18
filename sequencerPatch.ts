import { IniMap } from "./ini";
import type { MotoquencerConfig } from './types/circuits/sequencing/motoquencer';
import type { MotorFaderConfig } from './types/circuits/io/motorfader';
import type { LFOConfig } from './types/circuits/modulation/lfo';

// Constants for clock configuration
const CLOCK_OUTPUT = "O1";
const CLOCK_HZ = "_CLOCK_HZ";
const CLOCK_LEVEL = "_CLOCK_LEVEL";

interface SequencerState extends Partial<MotoquencerConfig> {
  index: number;
  output: string;
  gate: string;
  isLinked: boolean;
}

interface SequencerConfig {
  numSteps: number;      // Total steps (16)
  numTracks: number;     // Number of tracks (4)
  clock: string;         // Clock input
  faderMode: string;     // Current fader mode
}

// Constants
const MAX_STEPS = 32;
const MAX_TRACKS = 8;
const DEFAULT_STEPS = 16;
const DEFAULT_TRACKS = 4;

function validateConfig(config: SequencerConfig): void {
  if (config.numSteps < 1 || config.numSteps > MAX_STEPS) {
    throw new Error(`Number of steps must be between 1 and ${MAX_STEPS}`);
  }
  if (config.numTracks < 1 || config.numTracks > MAX_TRACKS) {
    throw new Error(`Number of tracks must be between 1 and ${MAX_TRACKS}`);
  }
}

function configureClockLFO(ini: IniMap): void {
  const lfo = ini.setSection("lfo");
  ini.set(lfo.id ?? lfo.sec, "output", CLOCK_OUTPUT);
  ini.set(lfo.id ?? lfo.sec, "waveform", "0");  // Square wave for clock
  ini.set(lfo.id ?? lfo.sec, "level", CLOCK_LEVEL);
  ini.set(lfo.id ?? lfo.sec, "hz", `${CLOCK_HZ} * 100`);

  // Configure clock speed fader
  const speedFader = ini.setSection("motorfader");
  ini.set(speedFader.id ?? speedFader.sec, "fader", "1");
  ini.set(speedFader.id ?? speedFader.sec, "output", CLOCK_HZ);
}

function createTrackConfig(index: number, isLinked: boolean): SequencerState {
  return {
    index,
    output: `O${index * 2 + 2}`,  // Start from O2 to leave O1 for clock
    gate: `O${index * 2 + 3}`,    // Adjust gate outputs accordingly
    isLinked
  };
}

function generatePatch(config: SequencerConfig): string {
  validateConfig(config);
  const ini = new IniMap();

  ini.setComment("# LABELS: master=18");
  ini.setSection("p2b8");
  ini.setSection("e4");
  ini.setSection("m4");

  // Configure clock LFO first
  configureClockLFO(ini);

  // Configure tracks
  Array.from({ length: config.numTracks }, (_, i) => {
    const track = createTrackConfig(i, i > 0);
    const section = ini.setSection('motoquencer');
    
    if (i === 0) {
      // Main sequencer
      ini.set(section.id ?? section.sec, 'clock', CLOCK_OUTPUT);  // Use LFO output as clock
      ini.set(section.id ?? section.sec, 'fadermode', config.faderMode);
      ini.set(section.id ?? section.sec, 'numsteps', config.numSteps.toString());
      ini.set(section.id ?? section.sec, 'linktonext', '1');
    }
    
    ini.set(section.id ?? section.sec, 'cv', track.output);
    ini.set(section.id ?? section.sec, 'gate', track.gate);
  });

  return ini.toString();
}

// Parse command line arguments
const config: SequencerConfig = {
  numSteps: Bun.argv[2] ? parseInt(Bun.argv[2], 10) : DEFAULT_STEPS,
  numTracks: Bun.argv[3] ? parseInt(Bun.argv[3], 10) : DEFAULT_TRACKS,
  clock: 'I1',
  faderMode: '_FADERMODE'
};

console.log(generatePatch(config));
