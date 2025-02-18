import type { BaseCircuitConfig } from '../../base';
import type { GateInput, CVInput } from '../../common';

/**
 * Trigger delay circuit configuration
 * @see DROID manual page 380
 */
export interface TriggerDelayConfig extends BaseCircuitConfig {
  /** Input trigger */
  input?: GateInput;
  
  /** Delay time in seconds */
  time?: CVInput;
  
  /** Reset delay timer */
  reset?: GateInput;
  
  /** Output trigger */
  output?: GateInput;
  
  /** Output running state */
  running?: GateInput;
}
