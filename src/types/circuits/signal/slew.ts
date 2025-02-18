import type { BaseCircuitConfig } from '../../base';
import type { GateInput, CVInput } from '../../common';

/**
 * Slew limiter circuit configuration
 * @see DROID manual page 355
 */
export interface SlewConfig extends BaseCircuitConfig {
  /** Input CV */
  input?: CVInput;
  
  /** Slew rate */
  slew?: CVInput;
  
  /** Upward slew rate multiplier */
  slewup?: CVInput;
  
  /** Downward slew rate multiplier */
  slewdown?: CVInput;
  
  /** Enable gate */
  gate?: GateInput;
  
  /** Exponential slew output */
  exponential?: CVInput;
  
  /** Linear slew output */
  linear?: CVInput;
  
  /** S-curve slew output */
  scurve?: CVInput;
}
