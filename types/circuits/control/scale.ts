import type { BaseCircuitConfig } from '../../base';
import type { GateInput, CVInput } from '../../common';

/**
 * Scale selection circuit configuration
 * @see DROID manual page 348
 */
export interface ScaleConfig extends BaseCircuitConfig {
  /** Root note (0-11) */
  root?: CVInput;
  
  /** Scale degree (0-107) */
  degree?: CVInput;
  
  /** Transpose amount */
  transpose?: CVInput;
  
  /** Scale note outputs (1-7) */
  note1?: CVInput;
  note2?: CVInput;
  note3?: CVInput;
  note4?: CVInput;
  note5?: CVInput;
  note6?: CVInput;
  note7?: CVInput;
}
