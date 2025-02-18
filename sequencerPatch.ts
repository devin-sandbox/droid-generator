/// <reference types="bun-types" />
import { IniMap } from "./ini";

interface MotoquencerConfig {
  index: number;          // Track index
  output: string;         // CV output
  gate: string;          // Gate output
  isLinked: boolean;     // Whether this track is linked to previous
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

function createTrackConfig(index: number, isLinked: boolean): MotoquencerConfig {
  return {
    index,
    output: `O${index * 2 + 1}`,
    gate: `O${index * 2 + 2}`,
    isLinked
  };
}

function generatePatch(config: SequencerConfig): string {
  validateConfig(config);
  const ini = new IniMap();

  // Required controller
  ini.setSection('m4');

  // Configure tracks
  Array.from({ length: config.numTracks }, (_, i) => {
    const track = createTrackConfig(i, i > 0);
    const section = ini.setSection('motoquencer');
    
    if (i === 0) {
      // Main sequencer
      ini.set(section.id ?? section.sec, 'clock', config.clock);
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
