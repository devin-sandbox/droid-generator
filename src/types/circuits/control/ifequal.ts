import type { BaseCircuitConfig } from '../../base';
import type { CVInput } from '../../common';

/**
 * Check if two values are equal circuit configuration
 * @see DROID manual page 238
 */
export interface IfEqualConfig extends BaseCircuitConfig {
  /** First input value */
  input1?: CVInput;
  
  /** Second input value */
  input2?: CVInput;
  
  /** Value to output if inputs are equal */
  ifequal?: CVInput;
  
  /** Value to output if inputs are not equal */
  else?: CVInput;
  
  /** Output value */
  output?: CVInput;
}
