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
  
  // Configure LFO for clock generation
  const lfo = {
    section: 'lfo' as const,
    hz: '2',           // 2Hz = 120 BPM
    waveform: '0',     // Square wave
    level: '1',        // Full level
    bipolar: '0',      // Unipolar output
    square: '_INTERNAL_CLOCK'       // Direct output to motoquencer
  };
  patch.addCircuit(lfo);
  
  // Configure button for future layer switching
  const button = {
    section: 'button' as const,
    button: 'E2.1',  // Use encoder's button
    led: '1',        // LED output at full brightness (0-1 float)
    states: '2'      // Two states for future layer switching
  };
  patch.addCircuit(button);

  // Configure motoquencer for basic 4-step sequence
  const motoquencer = {
    section: 'motoquencer' as const,
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
    cvbase: '-1',                 // Full negative range
    cvrange: '1',                 // Full range (0 to 1)
    quantize: '1',                // 1 = semitones
    
    // Pattern control
    pattern: '0',                 // Default pattern
    form: '0',                    // Default form
    
    // Randomization
    luckychance: '0',             // No random probability
    luckyamount: '0'              // No random amount
  };
  patch.addCircuit(motoquencer);
  
  return patch;
}
