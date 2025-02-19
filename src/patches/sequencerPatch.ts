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
    firstfader: `${1 + (trackIndex * 4)}`,  // Track 1: 1-4, Track 2: 5-8, etc.
    numfaders: '4',
    numsteps: '4',
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
  const numSteps = 4;
  const numTracks = 4;  // Fixed 4 tracks
  
  // Need multiple M4 modules for 16 faders
  const patch = new Patch([DeviceType.P2B8, DeviceType.E4, DeviceType.M4, DeviceType.M4]);
  
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
  
  // Configure track selection buttons
  const buttons = [1, 2, 3, 4].map(i => {
    const button: Circuit = {
      section: 'button',
      button: `B1.${i}`,  // B1.1 through B1.4 on P2B8
      states: '2',        // Simple on/off state
      led: `L1.${i}`     // LED feedback
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
