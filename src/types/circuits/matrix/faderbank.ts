import type { BaseCircuitConfig } from '../../base';
import type { GateInput, CVInput } from '../../common';

/**
 * Fader bank circuit configuration
 * @see DROID manual page 220
 */
export interface FaderBankConfig extends BaseCircuitConfig {
  /** First fader to use */
  firstfader?: CVInput;
  
  /** Number of notches */
  notches?: CVInput;
  
  /** Initial value */
  startvalue?: CVInput;
  
  /** LED color */
  ledcolor?: CVInput;
  
  /** Individual LED values (1-16) */
  ledvalue1?: CVInput;
  ledvalue2?: CVInput;
  ledvalue3?: CVInput;
  ledvalue4?: CVInput;
  ledvalue5?: CVInput;
  ledvalue6?: CVInput;
  ledvalue7?: CVInput;
  ledvalue8?: CVInput;
  ledvalue9?: CVInput;
  ledvalue10?: CVInput;
  ledvalue11?: CVInput;
  ledvalue12?: CVInput;
  ledvalue13?: CVInput;
  ledvalue14?: CVInput;
  ledvalue15?: CVInput;
  ledvalue16?: CVInput;
  
  /** Outputs (1-16) */
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
  
  /** Button states (1-16) */
  button1?: GateInput;
  button2?: GateInput;
  button3?: GateInput;
  button4?: GateInput;
  button5?: GateInput;
  button6?: GateInput;
  button7?: GateInput;
  button8?: GateInput;
  button9?: GateInput;
  button10?: GateInput;
  button11?: GateInput;
  button12?: GateInput;
  button13?: GateInput;
  button14?: GateInput;
  button15?: GateInput;
  button16?: GateInput;
}
