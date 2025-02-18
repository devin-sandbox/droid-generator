import type { BaseCircuitConfig } from '../../base';
import type { GateInput, CVInput } from '../../common';

/**
 * Euclidean rhythm generator circuit configuration
 * @see DROID manual page 216
 */
export interface EuklidConfig extends BaseCircuitConfig {
  /** Clock input */
  clock?: GateInput;
  
  /** Reset trigger */
  reset?: GateInput;
  
  /** Output signal override */
  outputsignal?: CVInput;
  
  /** Pattern length (1-64) */
  length?: CVInput;
  
  /** Number of beats */
  beats?: CVInput;
  
  /** Pattern offset */
  offset?: CVInput;
  
  /** Trigger output */
  output?: GateInput;
  
  /** Inverted trigger output */
  offbeats?: GateInput;
}
