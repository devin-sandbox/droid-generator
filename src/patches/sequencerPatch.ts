import { Patch } from '../patch';
import type { Circuit } from '../types/circuits';
import type { MotoquencerConfig } from '../types/circuits/sequencing/motoquencer';
import type { ButtonGroupConfig } from '../types/circuits/io/buttongroup';
import type { EncoderConfig } from '../types/circuits/io/encoder';
import type { MotorFaderConfig } from '../types/circuits/io/motorfader';
import { DeviceType } from '../types/devices';

interface SequencerOptions {
  numSteps?: number;
  numTracks?: number;
  defaultLayer?: 'step' | 'tempo';
}

function createTrackConfig(trackIndex: number): Circuit {
  return {
    section: 'motoquencer',
    clock: '_INTERNAL_CLOCK',
    firstfader: '1',  // All tracks share faders 1-4
    numfaders: '4',
    numsteps: '4',
    select: '_LAYER_STATE',  // Layer selection - active in step mode
    selectat: `${trackIndex}`,  // Activate when track is selected and in step layer
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
  const defaultLayer = options.defaultLayer ?? 'step';

  if (numTracks < 1 || numTracks > 4) {
    throw new Error('Track count must be between 1 and 4');
  }
  
  // Single M4 module - all tracks share the same 4 faders
  const patch = new Patch([DeviceType.P2B8, DeviceType.E4, DeviceType.M4]);
  
  // Add label comment
  patch.addComment('LABELS: master=18');

  // Configure encoder for layer switching
  const layerEncoder: Circuit & EncoderConfig = {
    section: 'encoder',
    encoder: 'E2.1',
    mode: '6',     // Circular mode for layer switching
    discrete: '2', // Two positions for step/tempo layers
    snapforce: '1', // Strong snap between positions
    output: '_CURRENT_LAYER',
    color: '_LAYER_STATE * 0.6',  // Blue (0.6) for tempo, Red (0) for step
    startvalue: defaultLayer === 'tempo' ? '1' : '0'
  };
  patch.addCircuit(layerEncoder);

  // Configure layer state math
  const layerMath: Circuit = {
    section: 'math',
    input1: '_CURRENT_LAYER',
    sum: '_LAYER_STATE'
  };
  patch.addCircuit(layerMath);

  // Configure BPM control faders
  const bpmFaders: (Circuit & MotorFaderConfig)[] = [
    {
      section: 'motorfader',
      fader: '1',
      notches: '10',
      outputscale: '9',
      snapforce: '0.8',
      output: '_BPM_HUNDREDS',
      select: '_LAYER_STATE',
      selectat: '1'  // Active in tempo layer
    },
    {
      section: 'motorfader',
      fader: '2',
      notches: '10',
      outputscale: '9',
      snapforce: '0.8',
      output: '_BPM_TENS',
      select: '_LAYER_STATE',
      selectat: '1'
    },
    {
      section: 'motorfader',
      fader: '3',
      notches: '10',
      outputscale: '9',
      snapforce: '0.8',
      output: '_BPM_ONES',
      select: '_LAYER_STATE',
      selectat: '1'
    }
  ];
  
  // Add BPM faders to patch
  bpmFaders.forEach(fader => patch.addCircuit(fader));
  
  // Configure LFO for clock generation
  const lfo: Circuit = {
    section: 'lfo',
    hz: '(_BPM_HUNDREDS * 100 + _BPM_TENS * 10 + _BPM_ONES) / 60',  // Convert BPM to Hz
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
