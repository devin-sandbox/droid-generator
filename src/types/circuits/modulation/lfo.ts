import type { BaseCircuitConfig } from '../../base';
import type { GateInput, CVInput, BooleanInput } from '../../common';

/**
 * LFO (Low Frequency Oscillator) circuit configuration
 * @see DROID manual page 239
 */
export interface LFOConfig extends BaseCircuitConfig {
  /** Frequency control (1V/octave) */
  rate?: CVInput;
  
  /** Reference clock input */
  taptempo?: GateInput;
  
  /** Frequency in Hz */
  hz: CVInput;
  
  /** Output level */
  level?: CVInput;
  
  /** Randomization amount (0-1) */
  randomize?: CVInput;
  
  /** Output offset */
  offset?: CVInput;
  
  /** Enable bipolar output */
  bipolar?: BooleanInput;
  
  /** Phase shift (0-1) */
  phase?: CVInput;
  
  /** Pulse width (0-1) */
  pulsewidth?: CVInput;
  
  /** Waveform skew (0-1) */
  skew?: CVInput;
  
  /** Sync input */
  sync?: GateInput;
  
  /** Sync phase (0-1) */
  syncphase?: CVInput;
  
  /** Waveform selection (0-6) */
  waveform: CVInput;
  
  /** Main output */
  output?: CVInput;
  
  /** Square wave output */
  square: CVInput;
  
  /** Sawtooth wave output */
  sawtooth?: CVInput;
  
  /** Triangle wave output */
  triangle?: CVInput;
  
  /** Ramp wave output */
  ramp?: CVInput;
  
  /** Paraboloid wave output */
  paraboloid?: CVInput;
  
  /** Sine wave output */
  sine?: CVInput;
  
  /** Cosine wave output */
  cosine?: CVInput;
}
