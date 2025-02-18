import type { BaseCircuitConfig } from '../../base';
import type { GateInput, CVInput, BooleanInput } from '../../common';

/**
 * CV Looper circuit configuration
 * @see DROID manual page 174
 */
export interface CVLooperConfig extends BaseCircuitConfig {
  /** Input CV to loop */
  cvin?: CVInput;
  
  /** Input gate */
  gatein?: GateInput;
  
  /** Input clock */
  clock: GateInput;
  
  /** Reset playback head */
  reset?: GateInput;
  
  /** Loop length in ticks */
  length?: CVInput;
  
  /** Relative tape speed */
  tapespeed?: CVInput;
  
  /** Loop enable switch */
  loopswitch?: GateInput;
  
  /** Pause playback */
  pause?: BooleanInput;
  
  /** Enable input overlay */
  overlay?: BooleanInput;
  
  /** Enable overdub recording */
  overdub?: BooleanInput;
  
  /** Bypass looping */
  bypass?: BooleanInput;
  
  /** Output CV */
  cvout?: CVInput;
  
  /** Output gate */
  gateout?: GateInput;
  
  /** Memory overflow indicator */
  overflow?: GateInput;
}
