import type { BaseCircuitConfig } from '../../base';
import type { CVInput } from '../../common';

/**
 * Signal copy circuit configuration
 * @see DROID manual page 172
 */
export interface CopyConfig extends BaseCircuitConfig {
  /** Input signal */
  input?: CVInput;
  
  /** Output signal */
  output?: CVInput;
}
