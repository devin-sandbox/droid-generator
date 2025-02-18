import { Patch } from '../patch';
import type { MotoquencerConfig } from '../types/circuits/sequencing/motoquencer';
import type { EncoderConfig } from '../types/circuits/io/encoder';
import { DeviceType } from '../types/devices';

interface SequencerOptions {
  numSteps?: number;
  numTracks?: number;
}

export function createSequencerPatch(options: SequencerOptions = {}) {
  const numSteps = 4; // Fixed 4 steps for single M4
  const numTracks = 1; // Start with single track

  const patch = new Patch([DeviceType.P2B8, DeviceType.E4, DeviceType.M4]);
  
  // Configure button for future layer switching
  const button = {
    section: 'button' as const,
    button: 'E2.1',  // Use encoder's button
    led: 'E2.1',     // Use encoder's LED
    states: '2'      // Two states for future layer switching
  };
  patch.addCircuit(button);

  // Configure motoquencer for basic 4-step sequence
  const motoquencer = {
    section: 'motoquencer' as const,
    clock: 'I1',      // Clock input on I1
    firstfader: '1',  // Use faders 1-4
    numfaders: '4',   // All 4 faders on M4
    numsteps: '4',    // 4-step sequence
    cv: 'O1',        // CV output on O1
    gate: 'G1',      // Gate output on G1
    button: 'E2.1',  // Connect to encoder button
    
    // Basic parameter control
    fadermode: '0',  // 0 = pitch/CV mode
    buttonmode: '0', // 0 = gates mode
    
    // CV and quantization
    cvbase: '-1',    // Full negative range
    cvrange: '2',    // Range of 2V for full octave
    quantize: '1',   // 1 = semitones
    
    // Advanced features
    repeats: '1',    // Default to 1 repeat per step
    ratchets: '1',   // Default to 1 ratchet per step
    luckychance: '0' // Default to no random probability
  };
  patch.addCircuit(motoquencer);
  
  return patch;
}
