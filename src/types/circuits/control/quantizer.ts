import type { BaseCircuitConfig } from '../../base';
import type { GateInput, CVInput } from '../../common';

/**
 * Pitch quantizer circuit configuration
 * @see DROID manual page 334
 */
export interface QuantizerConfig extends BaseCircuitConfig {
  /** Input pitch */
  input?: CVInput;
  
  /** Root note (0-11) */
  root?: CVInput;
  
  /** Scale degree (0-107) */
  degree?: CVInput;
  
  /** Transpose amount */
  transpose?: CVInput;
  
  /** Output pitch */
  output?: CVInput;
  
  /** Note change trigger */
  notechange?: GateInput;
}
