import type { BaseCircuitConfig } from '../../base';
import type { GateInput, CVInput, BooleanInput } from '../../common';

/**
 * Queue/stack data structure circuit configuration
 * @see DROID manual page 339
 */
export interface QueueConfig extends BaseCircuitConfig {
  /** Input value to push */
  input?: CVInput;
  
  /** Push trigger */
  push?: GateInput;
  
  /** Pop trigger */
  pop?: GateInput;
  
  /** Clear all values */
  clear?: GateInput;
  
  /** Enable LIFO (stack) mode */
  lifo?: BooleanInput;
  
  /** Current output value */
  output?: CVInput;
  
  /** Queue is empty */
  empty?: GateInput;
  
  /** Queue is full */
  full?: GateInput;
  
  /** Number of items in queue */
  size?: CVInput;
}
