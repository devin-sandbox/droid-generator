import type { BaseCircuitConfig } from '../../base';
import type { CVInput } from '../../common';

/**
 * Voltage controlled filter circuit configuration
 * @see DROID manual page 378
 */
export interface VcfConfig extends BaseCircuitConfig {
  /** Input signal */
  input?: CVInput;
  
  /** Cutoff frequency */
  cutoff?: CVInput;
  
  /** Resonance amount */
  resonance?: CVInput;
  
  /** Filter mode (0-3) */
  mode?: CVInput;
  
  /** Output signal */
  output?: CVInput;
}
