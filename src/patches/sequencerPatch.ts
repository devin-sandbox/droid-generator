import { Patch, type Circuit } from '../patch';
import type { MotoquencerConfig } from '../types/circuits/sequencing/motoquencer';
import { DeviceType } from '../types/devices';

interface SequencerOptions {
  numSteps?: number;
  numTracks?: number;
}

export function createSequencerPatch(options: SequencerOptions = {}) {
  const numSteps = 4; // Fixed 4 steps for single M4
  const numTracks = 1; // Start with single track

  const patch = new Patch([DeviceType.P2B8, DeviceType.E4, DeviceType.M4]);
  
  // Configure LFO for clock generation
  const lfo: Circuit = {
    section: 'lfo',
    hz: '2',           // 2Hz = 120 BPM
    waveform: '0',     // Square wave
    level: '1',        // Full level
    bipolar: '0',      // Unipolar output
    square: '_INTERNAL_CLOCK'       // Direct output to motoquencer
  };
  patch.addCircuit(lfo);
  
  // Configure motoquencer for basic 4-step sequence
  const motoquencer: Circuit = {
    section: 'motoquencer',
    clock: '_INTERNAL_CLOCK',      // Use LFO square output as clock
    firstfader: '1',              // Use faders 1-4
    numfaders: '4',               // All 4 faders on M4
    numsteps: '4',                // 4-step sequence
    cv: 'O1',                     // CV output on O1
    gate: 'G1',                   // Gate output on G1
    
    // Basic parameter control
    fadermode: '0',               // 0 = pitch/CV mode
    buttonmode: '0',              // 0 = gates mode
    
    // CV and quantization
    cvbase: '0',                  // Base value for CV range
    cvrange: '1',                 // Full range (0 to 1)
    quantize: '1'                 // 1 = semitones
  };
  patch.addCircuit(motoquencer);
  
  return patch;
}
