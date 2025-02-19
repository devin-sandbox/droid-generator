import { Patch, type Circuit } from '../patch';
import type { MotoquencerConfig } from '../types/circuits/sequencing/motoquencer';
import type { ButtonGroupConfig } from '../types/circuits/io/buttongroup';
import { DeviceType } from '../types/devices';

interface SequencerOptions {
  numSteps?: number;
  numTracks?: number;
}

function createTrackConfig(trackIndex: number): Circuit {
  return {
    section: 'motoquencer',
    clock: '_INTERNAL_CLOCK',
    firstfader: '1',  // All tracks share faders 1-4
    numfaders: '4',
    numsteps: '4',
    select: '_SELECTED_TRACK',  // Track selection input
    selectat: `${trackIndex}`,  // Activate when _SELECTED_TRACK matches index
    cv: `O${trackIndex + 1}`,  // O1-O4
    gate: `G${trackIndex + 1}`, // G1-G4
    fadermode: '0',
    buttonmode: '0',
    cvbase: '0',
    cvrange: '1',
    quantize: '2'
  };
}

export function createSequencerPatch(options: SequencerOptions = {}) {
  const numSteps = options.numSteps ?? 4;
  const numTracks = options.numTracks ?? 4;  // Default to 4 tracks

  if (numTracks < 1 || numTracks > 4) {
    throw new Error('Track count must be between 1 and 4');
  }
  
  // Single M4 module - all tracks share the same 4 faders
  const patch = new Patch([DeviceType.P2B8, DeviceType.E4, DeviceType.M4]);
  
  // Configure LFO for clock generation
  const lfo: Circuit = {
    section: 'lfo',
    hz: '2',           // 2Hz = 120 BPM
    waveform: '0',     // Square wave
    level: '1',        // Full level
    bipolar: '0',      // Unipolar output
    square: '_INTERNAL_CLOCK'
  };
  patch.addCircuit(lfo);
  
  // Configure button group for track selection
  const buttonGroup: Circuit & ButtonGroupConfig = {
    section: 'buttongroup',
    button1: 'B1.1',
    button2: 'B1.2',
    button3: 'B1.3',
    button4: 'B1.4',
    led1: 'L1.1',
    led2: 'L1.2',
    led3: 'L1.3',
    led4: 'L1.4',
    value1: '0',  // Track 1 selection value
    value2: '1',  // Track 2 selection value
    value3: '2',  // Track 3 selection value
    value4: '3',  // Track 4 selection value
    maxactive: '1',  // Only one track can be active at a time
    minactive: '1',  // At least one track must be active
    startbutton: '1',  // Track 1 selected by default
    output: '_SELECTED_TRACK'  // Output value used for track selection
  };
  patch.addCircuit(buttonGroup);
  
  // Add tracks
  for (let i = 0; i < numTracks; i++) {
    patch.addCircuit(createTrackConfig(i));
  }
  
  return patch;
}
