import type { BaseCircuitConfig } from '../../base';
import type { GateInput, CVInput, BooleanInput } from '../../common';

/**
 * Button circuit configuration
 * @see DROID manual page 141
 */
export interface ButtonConfig extends BaseCircuitConfig {
  /** Button input */
  button?: GateInput;
  
  /** LED output */
  led?: GateInput;
  
  /** Value when button is off (same as value1) */
  offvalue?: CVInput;
  
  /** Value when button is on (same as value2) */
  onvalue?: CVInput;
  
  /** Value for state 1 */
  value1?: CVInput;
  
  /** Value for state 2 */
  value2?: CVInput;
  
  /** Value for state 3 */
  value3?: CVInput;
  
  /** Value for state 4 */
  value4?: CVInput;
  
  /** Enable double-click mode */
  doubleclickmode?: BooleanInput;
  
  /** Long press time in seconds */
  longpresstime?: CVInput;
  
  /** Number of states (1-4) */
  states?: CVInput;
  
  /** Initial state */
  startvalue?: CVInput;
  
  /** Select input for button sharing */
  select?: CVInput;
  
  /** Select at specific value */
  selectat?: CVInput;
  
  /** Preset number (0-15) */
  preset?: CVInput;
  
  /** Load preset trigger */
  loadpreset?: GateInput;
  
  /** Save preset trigger */
  savepreset?: GateInput;
  
  /** Clear current state */
  clear?: GateInput;
  
  /** Clear all presets */
  clearall?: GateInput;
  
  /** Don't save state to SD card */
  dontsave?: BooleanInput;
  
  /** Output for current value */
  output?: CVInput;
  
  /** Inverted output */
  inverted?: CVInput;
  
  /** Negated output (always 0/1) */
  negated?: CVInput;
  
  /** Long press output */
  longpress?: GateInput;
  
  /** Short press output */
  shortpress?: GateInput;
}
