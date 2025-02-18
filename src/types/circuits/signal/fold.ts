import type { BaseCircuitConfig } from '../../base';
import type { CVInput } from '../../common';

/**
 * Voltage folder circuit configuration
 * @see DROID manual page 232
 */
export interface FoldConfig extends BaseCircuitConfig {
  /** Input signal */
  input?: CVInput;
  
  /** Fold amount */
  foldby?: CVInput;
  
  /** Minimum value */
  minimum?: CVInput;
  
  /** Maximum value */
  maximum?: CVInput;
  
  /** Output signal */
  output?: CVInput;
}
