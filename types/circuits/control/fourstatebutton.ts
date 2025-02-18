import type { BaseCircuitConfig } from '../../base';
import type { GateInput, CVInput } from '../../common';

/**
 * Four-state button circuit configuration (OBSOLETE)
 * @see DROID manual page 234
 */
export interface FourStateButtonConfig extends BaseCircuitConfig {
  /** Button input */
  button?: GateInput;
  
  /** Reset to first state */
  reset?: GateInput;
  
  /** Value for state 1 */
  value1?: CVInput;
  /** Value for state 2 */
  value2?: CVInput;
  /** Value for state 3 */
  value3?: CVInput;
  /** Value for state 4 */
  value4?: CVInput;
  
  /** Initial state (0-3) */
  startvalue?: CVInput;
  
  /** Current value output */
  output?: CVInput;
  
  /** LED output */
  led?: GateInput;
}
