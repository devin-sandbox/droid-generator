import { Patch, type Circuit } from '../patch';
import type { MotoquencerConfig } from '../types/circuits/sequencing/motoquencer';
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
    page: `TRACK_${trackIndex}`,  // Connect to button output for page selection
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
  
  // Configure track selection buttons with page connections
  const buttons = Array.from({ length: numTracks }, (_, i) => {
    const button: Circuit = {
      section: 'button',
      button: `B1.${i + 1}`,  // B1.1 through B1.4 on P2B8
      states: '2',        // Simple on/off state
      led: `L1.${i + 1}`,     // LED feedback
      output: `TRACK_${i}`  // Output value used for page selection
    };
    return button;
  });
  buttons.forEach(button => patch.addCircuit(button));
  
  // Add tracks
  for (let i = 0; i < numTracks; i++) {
    patch.addCircuit(createTrackConfig(i));
  }
  
  return patch;
}
