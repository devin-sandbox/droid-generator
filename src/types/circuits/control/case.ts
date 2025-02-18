import type { BaseCircuitConfig } from '../../base';
import type { CVInput } from '../../common';

/**
 * Case selection circuit configuration
 * @see DROID manual page 153
 */
export interface CaseConfig extends BaseCircuitConfig {
  /** Case conditions (1-16) */
  case1?: CVInput;
  case2?: CVInput;
  case3?: CVInput;
  case4?: CVInput;
  case5?: CVInput;
  case6?: CVInput;
  case7?: CVInput;
  case8?: CVInput;
  case9?: CVInput;
  case10?: CVInput;
  case11?: CVInput;
  case12?: CVInput;
  case13?: CVInput;
  case14?: CVInput;
  case15?: CVInput;
  case16?: CVInput;
  
  /** Case values (1-16) */
  value1?: CVInput;
  value2?: CVInput;
  value3?: CVInput;
  value4?: CVInput;
  value5?: CVInput;
  value6?: CVInput;
  value7?: CVInput;
  value8?: CVInput;
  value9?: CVInput;
  value10?: CVInput;
  value11?: CVInput;
  value12?: CVInput;
  value13?: CVInput;
  value14?: CVInput;
  value15?: CVInput;
  value16?: CVInput;
  
  /** Default value if no case matches */
  else?: CVInput;
  
  /** Selected value output */
  output?: CVInput;
}
