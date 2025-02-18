import type { BaseCircuitConfig } from '../../base';
import type { GateInput, CVInput } from '../../common';

/**
 * Output calibration circuit configuration
 * @see DROID manual page 326
 */
export interface OutputCalibratorConfig extends BaseCircuitConfig {
  /** Output to calibrate (1-8) */
  output?: CVInput;
  
  /** Reference point (0=0V, 1=5V) */
  referencepoint?: CVInput;
  
  /** Increase calibration value */
  nudgeup?: GateInput;
  
  /** Decrease calibration value */
  nudgedown?: GateInput;
  
  /** Save calibration values */
  save?: GateInput;
  
  /** Cancel calibration changes */
  cancel?: GateInput;
  
  /** Load default calibration */
  loaddefaults?: GateInput;
  
  /** Calibration needs saving */
  dirty?: CVInput;
  
  /** Current calibration difference */
  calibration?: CVInput;
  
  /** Percentage of uncalibrated outputs */
  uncalibrated?: CVInput;
}
