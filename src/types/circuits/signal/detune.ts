import type { BaseCircuitConfig } from '../../base';
import type { CVInput, BooleanInput } from '../../common';

/**
 * Pitch detuning circuit configuration
 * @see DROID manual page 182
 */
export interface DetuneConfig extends BaseCircuitConfig {
  /** Input pitches (1-8) */
  input1?: CVInput;
  input2?: CVInput;
  input3?: CVInput;
  input4?: CVInput;
  input5?: CVInput;
  input6?: CVInput;
  input7?: CVInput;
  input8?: CVInput;
  
  /** Detune amount */
  detune?: CVInput;
  
  /** Tuning mode enable */
  tuningmode?: BooleanInput;
  
  /** Tuning pitch output */
  tuningpitch?: CVInput;
  
  /** Output pitches (1-8) */
  output1?: CVInput;
  output2?: CVInput;
  output3?: CVInput;
  output4?: CVInput;
  output5?: CVInput;
  output6?: CVInput;
  output7?: CVInput;
  output8?: CVInput;
}
