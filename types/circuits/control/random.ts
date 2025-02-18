import type { BaseCircuitConfig } from '../../base';
import type { GateInput, CVInput } from '../../common';

/**
 * Random generator circuit configuration
 * @see DROID manual page 340
 */
export interface RandomConfig extends BaseCircuitConfig {
  /** Trigger input */
  trigger?: GateInput;
  
  /** Minimum value */
  minimum?: CVInput;
  
  /** Maximum value */
  maximum?: CVInput;
  
  /** Random value output */
  output?: CVInput;
  
  /** Gate output */
  gate?: GateInput;
}
