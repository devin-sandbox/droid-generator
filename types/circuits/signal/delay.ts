import type { BaseCircuitConfig } from '../../base';
import type { GateInput, CVInput, BooleanInput } from '../../common';

/**
 * Delay circuit configuration
 * @see DROID manual page 179
 */
export interface DelayConfig extends BaseCircuitConfig {
  /** Continuous input CV */
  cvin?: CVInput;
  
  /** Discrete input number (0-255) */
  numberin?: CVInput;
  
  /** Input gates (1-8) */
  gatein1?: GateInput;
  gatein2?: GateInput;
  gatein3?: GateInput;
  gatein4?: GateInput;
  gatein5?: GateInput;
  gatein6?: GateInput;
  gatein7?: GateInput;
  gatein8?: GateInput;
  
  /** Input clock */
  clock?: GateInput;
  
  /** Delay amount in seconds or ticks */
  delay?: CVInput;
  
  /** Sample trigger input */
  sample?: GateInput;
  
  /** Sample window time in seconds */
  timewindow?: CVInput;
  
  /** Bypass mode */
  bypass?: BooleanInput;
  
  /** Save tape trigger */
  save?: GateInput;
  
  /** Load tape trigger */
  load?: GateInput;
  
  /** Tape file number (0-9999) */
  filenumber?: CVInput;
  
  /** Continuous output CV */
  cvout?: CVInput;
  
  /** Discrete output number (0-255) */
  numberout?: CVInput;
  
  /** Output gates (1-8) */
  gateout1?: GateInput;
  gateout2?: GateInput;
  gateout3?: GateInput;
  gateout4?: GateInput;
  gateout5?: GateInput;
  gateout6?: GateInput;
  gateout7?: GateInput;
  gateout8?: GateInput;
  
  /** Memory overflow indicator */
  overflow?: GateInput;
}
