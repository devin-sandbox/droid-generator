import type { BaseCircuitConfig } from '../../base';
import type { CVInput } from '../../common';

/**
 * Value comparison circuit configuration
 * @see DROID manual page 165
 */
export interface CompareConfig extends BaseCircuitConfig {
  /** Input value */
  input?: CVInput;
  
  /** Reference value */
  compare?: CVInput;
  
  /** Output if input equals compare */
  ifequal?: CVInput;
  
  /** Output if input greater than compare */
  ifgreater?: CVInput;
  
  /** Output if input less than compare */
  ifless?: CVInput;
  
  /** Default output if no condition matches */
  else?: CVInput;
  
  /** Comparison precision */
  precision?: CVInput;
  
  /** Selected value output */
  output?: CVInput;
}
