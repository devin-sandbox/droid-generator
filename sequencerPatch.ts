import { IniMap } from "./ini";
import type { MotoquencerConfig } from './types/circuits/sequencing/motoquencer';
import type { MotorFaderConfig } from './types/circuits/io/motorfader';
import type { LFOConfig } from './types/circuits/modulation/lfo';

// Constants for layer selection
const LAYER_SELECT = "_LAYER_SELECT";
const LAYER_STEPS = 0;    // Step control layer
const LAYER_CLOCK = 1;    // Clock control layer
const LAYER_TRACKS = 2;   // Track selection layer

// Constants for track selection
const TRACK_SELECT = "_TRACK_SELECT";

// Constants for clock configuration
const CLOCK_OUTPUT = "O1";
const CLOCK_HZ = "_CLOCK_HZ";
const CLOCK_LEVEL = "_CLOCK_LEVEL";

// Constants for step control
const STEP_SELECT = "_STEP_SELECT";
const STEP_CV = "_STEP_CV";
const STEP_GATE = "_STEP_GATE";

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

function configureStepEncoder(ini: IniMap): void {
  const enc = ini.setSection("encoder");
  ini.set(enc.id ?? enc.sec, "encoder", "E2.1");
  ini.set(enc.id ?? enc.sec, "discrete", "4");  // 4 pages of 4 steps
  ini.set(enc.id ?? enc.sec, "output", STEP_SELECT);
  ini.set(enc.id ?? enc.sec, "button", "1");  // Enable button for layer switching
  ini.set(enc.id ?? enc.sec, "buttonmode", "cycle");  // Cycle through layers
  ini.set(enc.id ?? enc.sec, "buttonoutput", LAYER_SELECT);  // Button controls layer
  ini.set(enc.id ?? enc.sec, "color", STEP_SELECT);  // Visual feedback for current page
  ini.set(enc.id ?? enc.sec, "negativecolor", "0.2");  // Cyan for clock layer
  ini.set(enc.id ?? enc.sec, "positivecolor", "0.4");  // Green for track layer
}

function configureClockLFO(ini: IniMap): void {
  const lfo = ini.setSection("lfo");
  ini.set(lfo.id ?? lfo.sec, "output", CLOCK_OUTPUT);
  ini.set(lfo.id ?? lfo.sec, "waveform", "0");  // Square wave for clock
  ini.set(lfo.id ?? lfo.sec, "level", CLOCK_LEVEL);
  ini.set(lfo.id ?? lfo.sec, "hz", `${CLOCK_HZ} * 100`);
}

function configureClockFaders(ini: IniMap): void {
  // Clock speed fader
  const speedFader = ini.setSection("motorfader");
  ini.set(speedFader.id ?? speedFader.sec, "fader", "1");
  ini.set(speedFader.id ?? speedFader.sec, "select", LAYER_SELECT);
  ini.set(speedFader.id ?? speedFader.sec, "selectat", LAYER_CLOCK.toString());
  ini.set(speedFader.id ?? speedFader.sec, "output", CLOCK_HZ);

  // Clock level fader
  const levelFader = ini.setSection("motorfader");
  ini.set(levelFader.id ?? levelFader.sec, "fader", "2");
  ini.set(levelFader.id ?? levelFader.sec, "select", LAYER_SELECT);
  ini.set(levelFader.id ?? levelFader.sec, "selectat", LAYER_CLOCK.toString());
  ini.set(levelFader.id ?? levelFader.sec, "output", CLOCK_LEVEL);
}

function configureTrackFaders(ini: IniMap): void {
  // Configure 4 faders for track control
  Array.from({ length: 4 }, (_, i) => {
    const fader = ini.setSection("motorfader");
    ini.set(fader.id ?? fader.sec, "fader", (i + 1).toString());
    ini.set(fader.id ?? fader.sec, "select", LAYER_SELECT);
    ini.set(fader.id ?? fader.sec, "selectat", LAYER_TRACKS.toString());
    ini.set(fader.id ?? fader.sec, "output", `_TRACK_${i + 1}_SELECT`);
  });
}

function configureStepFaders(ini: IniMap): void {
  // Configure 4 faders for step control
  Array.from({ length: 4 }, (_, i) => {
    const fader = ini.setSection("motorfader");
    ini.set(fader.id ?? fader.sec, "fader", (i + 1).toString());
    ini.set(fader.id ?? fader.sec, "select", LAYER_SELECT);
    ini.set(fader.id ?? fader.sec, "selectat", LAYER_STEPS.toString());
    ini.set(fader.id ?? fader.sec, "output", `_STEP_${i + 1}_CV`);
    
    // Configure gate length
    const gateFader = ini.setSection("motorfader");
    ini.set(gateFader.id ?? gateFader.sec, "fader", (i + 1).toString());
    ini.set(gateFader.id ?? gateFader.sec, "select", LAYER_SELECT);
    ini.set(gateFader.id ?? gateFader.sec, "selectat", LAYER_STEPS.toString());
    ini.set(gateFader.id ?? gateFader.sec, "output", `_STEP_${i + 1}_GATE`);
  });
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

  // Configure encoder for layer switching and step selection
  configureStepEncoder(ini);

  // Configure faders for all layers
  configureClockFaders(ini);   // Layer 1: Clock control
  configureStepFaders(ini);    // Layer 0: Step control
  configureTrackFaders(ini);   // Layer 2: Track selection

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
