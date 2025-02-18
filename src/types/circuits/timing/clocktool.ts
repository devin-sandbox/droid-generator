import type { BaseCircuitConfig } from '../../base';
import type { GateInput, CVInput } from '../../common';

/**
 * Clock tool circuit configuration
 * @see DROID manual page 162
 */
export interface ClockToolConfig extends BaseCircuitConfig {
  /** Input clock */
  clock: GateInput;
  
  /** Reset counter */
  reset?: GateInput;
  
  /** Clock division factor (integer) */
  divide?: CVInput;
  
  /** Clock multiplication factor (integer) */
  multiply?: CVInput;
  
  /** Output duty cycle (0-1) */
  dutycycle?: CVInput;
  
  /** Fixed gate length in seconds */
  gatelength?: CVInput;
  
  /** Time shift (-1 to 1) */
  delay?: CVInput;
  
  /** Output clock */
  output: GateInput;
  
  /** Input clock pitch (1V/oct) */
  inputpitch?: CVInput;
  
  /** Output clock pitch (1V/oct) */
  outputpitch?: CVInput;
}
