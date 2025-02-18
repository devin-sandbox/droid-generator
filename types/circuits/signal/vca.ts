import type { BaseCircuitConfig } from '../../base';
import type { CVInput } from '../../common';

/**
 * Voltage controlled amplifier circuit configuration
 * @see DROID manual page 377
 */
export interface VcaConfig extends BaseCircuitConfig {
  /** Input signal */
  input?: CVInput;
  
  /** Control voltage */
  cv?: CVInput;
  
  /** Output signal */
  output?: CVInput;
}
