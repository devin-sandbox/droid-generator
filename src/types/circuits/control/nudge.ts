import type { BaseCircuitConfig } from '../../base';
import type { GateInput, CVInput, BooleanInput } from '../../common';

/**
 * Value nudge circuit configuration
 * @see DROID manual page 320
 */
export interface NudgeConfig extends BaseCircuitConfig {
  /** Button for increasing value */
  buttonup?: GateInput;
  
  /** Button for decreasing value */
  buttondown?: GateInput;
  
  /** Step amount */
  amount?: CVInput;
  
  /** Initial value */
  startvalue?: CVInput;
  
  /** Minimum value */
  minimum?: CVInput;
  
  /** Maximum value */
  maximum?: CVInput;
  
  /** Enable value wrapping */
  wrap?: BooleanInput;
  
  /** Output offset */
  offset?: CVInput;
  
  /** Up button LED */
  ledup?: CVInput;
  
  /** Down button LED */
  leddown?: CVInput;
  
  /** Current value output */
  output?: CVInput;
  
  /** Select circuit when value matches */
  selectat?: CVInput;
  
  /** Preset number (0-15) */
  preset?: CVInput;
  
  /** Load preset trigger */
  loadpreset?: GateInput;
  
  /** Save preset trigger */
  savepreset?: GateInput;
  
  /** Reset to default state */
  clear?: GateInput;
  
  /** Reset state and all presets */
  clearall?: GateInput;
  
  /** Don't save state to SD card */
  dontsave?: BooleanInput;
}
