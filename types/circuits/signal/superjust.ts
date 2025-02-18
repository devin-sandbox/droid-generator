import type { BaseCircuitConfig } from '../../base';
import type { GateInput, CVInput } from '../../common';

/**
 * Perfect intonation circuit configuration
 * @see DROID manual page 359
 */
export interface SuperJustConfig extends BaseCircuitConfig {
  /** Input pitches (1-8) */
  input1?: CVInput;
  input2?: CVInput;
  input3?: CVInput;
  input4?: CVInput;
  input5?: CVInput;
  input6?: CVInput;
  input7?: CVInput;
  input8?: CVInput;
  
  /** Output pitches (1-8) */
  output1?: CVInput;
  output2?: CVInput;
  output3?: CVInput;
  output4?: CVInput;
  output5?: CVInput;
  output6?: CVInput;
  output7?: CVInput;
  output8?: CVInput;
  
  /** Enable tuning mode */
  tuningmode?: GateInput;
  
  /** Tuning pitch reference */
  tuningpitch?: CVInput;
}
