import type { BaseCircuitConfig } from '../../base';
import type { CVInput } from '../../common';

/**
 * Value switch circuit configuration
 * @see DROID manual page 361
 */
export interface SwitchConfig extends BaseCircuitConfig {
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
  
  /** Output values (1-16) */
  output1?: CVInput;
  output2?: CVInput;
  output3?: CVInput;
  output4?: CVInput;
  output5?: CVInput;
  output6?: CVInput;
  output7?: CVInput;
  output8?: CVInput;
  output9?: CVInput;
  output10?: CVInput;
  output11?: CVInput;
  output12?: CVInput;
  output13?: CVInput;
  output14?: CVInput;
  output15?: CVInput;
  output16?: CVInput;

  /** Control inputs */
  forward?: CVInput;
  backward?: CVInput;
  reset?: CVInput;
  offset?: CVInput;
}
