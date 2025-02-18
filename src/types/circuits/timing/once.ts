import type { BaseCircuitConfig } from '../../base';
import type { GateInput, CVInput, BooleanInput } from '../../common';

/**
 * One-time trigger circuit configuration
 * @see DROID manual page 325
 */
export interface OnceConfig extends BaseCircuitConfig {
  /** Delay before trigger (seconds) */
  delay?: CVInput;
  
  /** Only trigger on cold start */
  onlycoldstart?: BooleanInput;
  
  /** Trigger output */
  trigger?: GateInput;
}
