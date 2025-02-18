import type { BaseCircuitConfig } from '../../base';
import type { CVInput } from '../../common';

/**
 * Voltage controlled oscillator circuit configuration
 * @see DROID manual page 379
 */
export interface VcoConfig extends BaseCircuitConfig {
  /** Pitch control (1V/oct) */
  pitch?: CVInput;
  
  /** Fine tune amount */
  fine?: CVInput;
  
  /** Waveform selection (0-3) */
  waveform?: CVInput;
  
  /** Pulse width (when waveform=3) */
  pulsewidth?: CVInput;
  
  /** Output signal */
  output?: CVInput;
}
