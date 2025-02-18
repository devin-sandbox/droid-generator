import type { BaseCircuitConfig } from '../../base';
import type { CVInput } from '../../common';

/**
 * Multi-value comparison circuit configuration
 * @see DROID manual page 315
 */
export interface MultiCompareConfig extends BaseCircuitConfig {
  /** Input value to compare */
  input?: CVInput;
  
  /** First comparison value */
  compare1?: CVInput;
  /** Second comparison value */
  compare2?: CVInput;
  /** Third comparison value */
  compare3?: CVInput;
  /** Fourth comparison value */
  compare4?: CVInput;
  /** Fifth comparison value */
  compare5?: CVInput;
  /** Sixth comparison value */
  compare6?: CVInput;
  /** Seventh comparison value */
  compare7?: CVInput;
  /** Eighth comparison value */
  compare8?: CVInput;
  
  /** Output if input equals first value */
  ifequal1?: CVInput;
  /** Output if input equals second value */
  ifequal2?: CVInput;
  /** Output if input equals third value */
  ifequal3?: CVInput;
  /** Output if input equals fourth value */
  ifequal4?: CVInput;
  /** Output if input equals fifth value */
  ifequal5?: CVInput;
  /** Output if input equals sixth value */
  ifequal6?: CVInput;
  /** Output if input equals seventh value */
  ifequal7?: CVInput;
  /** Output if input equals eighth value */
  ifequal8?: CVInput;
  
  /** Default output if no comparison matches */
  else?: CVInput;
  
  /** Output value */
  output?: CVInput;
}
