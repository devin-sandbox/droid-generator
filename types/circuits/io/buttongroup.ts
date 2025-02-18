import type { BaseCircuitConfig } from '../../base';
import type { GateInput, CVInput, BooleanInput, EnumInput } from '../../common';

/**
 * Buttongroup circuit configuration
 * @see DROID manual page 146
 */
export interface ButtonGroupConfig extends BaseCircuitConfig {
  /** First button input */
  button1?: GateInput;
  
  /** Second button input */
  button2?: GateInput;
  
  /** Third button input */
  button3?: GateInput;
  
  /** Fourth button input */
  button4?: GateInput;
  
  /** Fifth button input */
  button5?: GateInput;
  
  /** Sixth button input */
  button6?: GateInput;
  
  /** Seventh button input */
  button7?: GateInput;
  
  /** Eighth button input */
  button8?: GateInput;
  
  /** First LED output */
  led1?: GateInput;
  
  /** Second LED output */
  led2?: GateInput;
  
  /** Third LED output */
  led3?: GateInput;
  
  /** Fourth LED output */
  led4?: GateInput;
  
  /** Fifth LED output */
  led5?: GateInput;
  
  /** Sixth LED output */
  led6?: GateInput;
  
  /** Seventh LED output */
  led7?: GateInput;
  
  /** Eighth LED output */
  led8?: GateInput;
  
  /** Value for button 1 */
  value1?: CVInput;
  
  /** Value for button 2 */
  value2?: CVInput;
  
  /** Value for button 3 */
  value3?: CVInput;
  
  /** Value for button 4 */
  value4?: CVInput;
  
  /** Value for button 5 */
  value5?: CVInput;
  
  /** Value for button 6 */
  value6?: CVInput;
  
  /** Value for button 7 */
  value7?: CVInput;
  
  /** Value for button 8 */
  value8?: CVInput;
  
  /** Minimum number of active buttons (0-32) */
  minactive?: CVInput;
  
  /** Maximum number of active buttons (1-32) */
  maxactive?: CVInput;
  
  /** Long press time in seconds */
  longpresstime?: CVInput;
  
  /** Initial button selection (0-32, -1 for max) */
  startbutton?: CVInput;
  
  /** Output value (sum of active button values) */
  output?: CVInput;
  
  /** Individual button 1 output */
  buttonoutput1?: CVInput;
  
  /** Individual button 2 output */
  buttonoutput2?: CVInput;
  
  /** Individual button 3 output */
  buttonoutput3?: CVInput;
  
  /** Individual button 4 output */
  buttonoutput4?: CVInput;
  
  /** Individual button 5 output */
  buttonoutput5?: CVInput;
  
  /** Individual button 6 output */
  buttonoutput6?: CVInput;
  
  /** Individual button 7 output */
  buttonoutput7?: CVInput;
  
  /** Individual button 8 output */
  buttonoutput8?: CVInput;
  
  /** Trigger when any button is pressed */
  buttonpress?: GateInput;
  
  /** Trigger on long press */
  longpress?: GateInput;
  
  /** Trigger when button selection changes */
  selectionchanged?: GateInput;
  
  /** Trigger when pressed button was already selected */
  extrapress?: GateInput;
}
