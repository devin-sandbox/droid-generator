import type { BaseCircuitConfig } from '../../base';
import type { GateInput, CVInput, BooleanInput } from '../../common';

/**
 * Transient generator circuit configuration
 * @see DROID manual page 369
 */
export interface TransientConfig extends BaseCircuitConfig {
  /** Start value */
  start?: CVInput;
  
  /** End value */
  end?: CVInput;
  
  /** Duration in seconds or clock ticks */
  duration?: CVInput;
  
  /** Enable loop mode */
  loop?: BooleanInput;
  
  /** Enable ping-pong mode */
  pingpong?: BooleanInput;
  
  /** Freeze at current position */
  freeze?: BooleanInput;
  
  /** Reset to start value */
  reset?: GateInput;
  
  /** Clock input for ticks mode */
  clock?: GateInput;
  
  /** Current value output */
  output?: CVInput;
  
  /** Current phase output */
  phase?: CVInput;
  
  /** End of transient trigger */
  endoftransient?: GateInput;
}
