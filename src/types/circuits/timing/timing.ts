import type { BaseCircuitConfig } from '../../base';
import type { GateInput, CVInput } from '../../common';

/**
 * Timing modification circuit configuration
 * @see DROID manual page 365
 */
export interface TimingConfig extends BaseCircuitConfig {
  /** Input clock */
  clock: GateInput;
  
  /** Reset counter */
  reset?: GateInput;
  
  /** Timing offsets (1-8) */
  timing1?: CVInput;
  timing2?: CVInput;
  timing3?: CVInput;
  timing4?: CVInput;
  timing5?: CVInput;
  timing6?: CVInput;
  timing7?: CVInput;
  timing8?: CVInput;
  
  /** Modified clock output */
  output?: GateInput;
}
