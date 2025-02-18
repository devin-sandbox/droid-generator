import type { BaseCircuitConfig } from '../../base';
import type { GateInput, CVInput } from '../../common';

/**
 * Shift register circuit configuration
 * @see DROID manual page 350
 */
export interface ShiftRegConfig extends BaseCircuitConfig {
  /** Clock input */
  clock?: GateInput;
  
  /** Reset trigger */
  reset?: GateInput;
  
  /** Input value */
  input?: CVInput;
  
  /** Shift outputs (1-8) */
  output1?: CVInput;
  output2?: CVInput;
  output3?: CVInput;
  output4?: CVInput;
  output5?: CVInput;
  output6?: CVInput;
  output7?: CVInput;
  output8?: CVInput;
}
