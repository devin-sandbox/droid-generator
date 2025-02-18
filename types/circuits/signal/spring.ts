import type { BaseCircuitConfig } from '../../base';
import type { GateInput, CVInput } from '../../common';

/**
 * Physical spring simulation circuit configuration
 * @see DROID manual page 357
 */
export interface SpringConfig extends BaseCircuitConfig {
  /** Mass of object */
  mass?: CVInput;
  
  /** Gravity force */
  gravity?: CVInput;
  
  /** Spring force per meter */
  springforce?: CVInput;
  
  /** Flow resistance */
  flowresistance?: CVInput;
  
  /** Friction force */
  friction?: CVInput;
  
  /** Time speed multiplier */
  speed?: CVInput;
  
  /** Apply shove force */
  shove?: GateInput;
  
  /** Shove force amount */
  shoveforce?: CVInput;
  
  /** Reset simulation */
  reset?: GateInput;
  
  /** Initial velocity */
  startvelocity?: CVInput;
  
  /** Initial position */
  startposition?: CVInput;
  
  /** Current velocity */
  velocity?: CVInput;
  
  /** Current position */
  position?: CVInput;
}
