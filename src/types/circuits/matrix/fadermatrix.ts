import type { BaseCircuitConfig } from '../../base';
import type { GateInput, CVInput, EnumInput } from '../../common';

/**
 * Fader matrix circuit configuration
 * @see DROID manual page 222
 */
export interface FaderMatrixConfig extends BaseCircuitConfig {
  /** First fader to use */
  firstfader?: CVInput;
  
  /** Row/column selection (0-7) */
  rowcolumn?: EnumInput;
  
  /** Notches for columns (1-4) */
  notches1?: CVInput;
  notches2?: CVInput;
  notches3?: CVInput;
  notches4?: CVInput;
  
  /** Start values for columns (1-4) */
  startvalue1?: CVInput;
  startvalue2?: CVInput;
  startvalue3?: CVInput;
  startvalue4?: CVInput;
  
  /** Matrix outputs (11-44) */
  output11?: CVInput;
  output12?: CVInput;
  output13?: CVInput;
  output14?: CVInput;
  output21?: CVInput;
  output22?: CVInput;
  output23?: CVInput;
  output24?: CVInput;
  output31?: CVInput;
  output32?: CVInput;
  output33?: CVInput;
  output34?: CVInput;
  output41?: CVInput;
  output42?: CVInput;
  output43?: CVInput;
  output44?: CVInput;
}
