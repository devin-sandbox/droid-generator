import type { BaseCircuitConfig } from '../../base';
import type { GateInput, CVInput } from '../../common';

/**
 * Flip-flop circuit configuration
 * @see DROID manual page 231
 */
export interface FlipFlopConfig extends BaseCircuitConfig {
  /** Toggle state */
  toggle?: GateInput;
  
  /** Set state to 1 */
  set?: GateInput;
  
  /** Reset state to 0 */
  reset?: GateInput;
  
  /** Reset to default state */
  clear?: GateInput;
  
  /** Initial state */
  startvalue?: CVInput;
  
  /** Load new value */
  load?: GateInput;
  
  /** Value to load */
  loadvalue?: CVInput;
  
  /** Output state */
  output?: GateInput;
}
