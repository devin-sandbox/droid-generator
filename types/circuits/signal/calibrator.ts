import type { BaseCircuitConfig } from '../../base';
import type { GateInput, CVInput } from '../../common';

/**
 * VCO calibration circuit configuration
 * @see DROID manual page 151
 */
export interface CalibratorConfig extends BaseCircuitConfig {
  /** Input pitch CV */
  input?: CVInput;
  
  /** Nudge up trigger */
  nudgeup?: GateInput;
  
  /** Nudge down trigger */
  nudgedown?: GateInput;
  
  /** Clear current note correction */
  clearhere?: GateInput;
  
  /** Nudge amount in semitones */
  nudgeamount?: CVInput;
  
  /** Tuning for octave 0 */
  tune0?: CVInput;
  /** Tuning for octave 1 */
  tune1?: CVInput;
  /** Tuning for octave 2 */
  tune2?: CVInput;
  /** Tuning for octave 3 */
  tune3?: CVInput;
  /** Tuning for octave 4 */
  tune4?: CVInput;
  /** Tuning for octave 5 */
  tune5?: CVInput;
  /** Tuning for octave 6 */
  tune6?: CVInput;
  /** Tuning for octave 7 */
  tune7?: CVInput;
  /** Tuning for octave 8 */
  tune8?: CVInput;
  
  /** Tuning for negative voltage range */
  tunelowtail?: CVInput;
  
  /** Tuning for voltages > 8V */
  tunehightail?: CVInput;
  
  /** Calibrated output */
  output?: CVInput;
  
  /** Up adjustment LED */
  ledup?: GateInput;
  
  /** Down adjustment LED */
  leddown?: GateInput;
  
  /** Current correction amount */
  correction?: CVInput;
}
