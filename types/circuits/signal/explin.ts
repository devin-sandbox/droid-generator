import type { BaseCircuitConfig } from '../../base';
import type { CVInput } from '../../common';

/**
 * Exponential to linear converter circuit configuration
 * @see DROID manual page 218
 */
export interface ExpLinConfig extends BaseCircuitConfig {
  /** Input signal */
  input?: CVInput;
  
  /** Start/maximum value */
  startvalue?: CVInput;
  
  /** End/minimum value */
  endvalue?: CVInput;
  
  /** Dry/wet mix (0-1) */
  mix?: CVInput;
  
  /** Output signal */
  output?: CVInput;
}
