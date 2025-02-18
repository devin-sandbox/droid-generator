import type { BaseCircuitConfig } from '../../base';
import type { CVInput } from '../../common';

/**
 * Value switch circuit configuration
 * @see DROID manual page 361
 */
export interface SwitchConfig extends BaseCircuitConfig {
  /** Switch position (0-15) */
  position?: CVInput;
  
  /** Input values (1-16) */
  input1?: CVInput;
  input2?: CVInput;
  input3?: CVInput;
  input4?: CVInput;
  input5?: CVInput;
  input6?: CVInput;
  input7?: CVInput;
  input8?: CVInput;
  input9?: CVInput;
  input10?: CVInput;
  input11?: CVInput;
  input12?: CVInput;
  input13?: CVInput;
  input14?: CVInput;
  input15?: CVInput;
  input16?: CVInput;
  
  /** Selected value output */
  output?: CVInput;
}
