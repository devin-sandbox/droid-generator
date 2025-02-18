import type { BaseCircuitConfig } from '../../base';
import type { GateInput, CVInput, BooleanInput } from '../../common';

/**
 * Motor fader circuit configuration
 * @see DROID manual page 311
 */
export interface MotorFaderConfig extends BaseCircuitConfig {
  /** Fader to use (1-based) */
  fader?: CVInput;
  
  /** Share output with next motorfader */
  sharewithnext?: BooleanInput;
  
  /** LED value override */
  ledvalue?: CVInput;
  
  /** LED color override */
  ledcolor?: CVInput;
  
  /** Initial value */
  startvalue?: CVInput;
  
  /** Number of notches */
  notches?: CVInput;
  
  /** Output scaling */
  outputscale?: CVInput;
  
  /** Output offset */
  outputoffset?: CVInput;
  
  /** Output smoothing (0-1) */
  smooth?: CVInput;
  
  /** Snap-to position */
  snapto?: CVInput;
  
  /** Snap force (0-1) */
  snapforce?: CVInput;
  
  /** LED color */
  color?: CVInput;
  
  /** LED color for negative values */
  negativecolor?: CVInput;
  
  /** LED fill mode (0=dot, 1=bar) */
  ledfill?: BooleanInput;
  
  /** Output value */
  output?: CVInput;
  
  /** Button state */
  button?: GateInput;
  
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
