import type { BaseCircuitConfig } from '../../base';
import type { CVInput } from '../../common';

/**
 * Signal crossfader circuit configuration
 * @see DROID manual page 173
 */
export interface CrossfaderConfig extends BaseCircuitConfig {
  /** Input signals (1-8) */
  input1?: CVInput;
  input2?: CVInput;
  input3?: CVInput;
  input4?: CVInput;
  input5?: CVInput;
  input6?: CVInput;
  input7?: CVInput;
  input8?: CVInput;
  
  /** Crossfade position (0-1) */
  fade?: CVInput;
  
  /** Output signal */
  output?: CVInput;
}
