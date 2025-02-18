import type { BaseCircuitConfig } from '../../base';
import type { GateInput, CVInput, BooleanInput } from '../../common';

/**
 * Pot (potentiometer) helper circuit configuration
 * Provides advanced potentiometer functionality including notches, discrete steps, and virtual pots
 * @see DROID manual page 329
 */
export interface PotConfig extends BaseCircuitConfig {
  /** Physical pot input (e.g. P1.1) */
  pot?: CVInput;
  
  /** Output scaling factor */
  outputscale?: CVInput;
  
  /** Center notch size (0-0.5) */
  notch?: CVInput;
  
  /** Number of discrete steps (1-16) */
  discrete?: CVInput;
  
  /** Response curve slope */
  slope?: CVInput;
  
  /** LED gauge color/enable */
  ledgauge?: CVInput;
  
  /** Initial value */
  startvalue?: CVInput;
  
  /** Main output value */
  output?: CVInput;
  
  /** Bipolar output (-outputscale to +outputscale) */
  bipolar?: CVInput;
  
  /** Left half output (0 to outputscale) */
  lefthalf?: CVInput;
  
  /** Right half output (0 to outputscale) */
  righthalf?: CVInput;
  
  /** Inverted left half output */
  lefthalfinv?: CVInput;
  
  /** Inverted right half output */
  righthalfinv?: CVInput;
  
  /** Value change trigger */
  onchange?: GateInput;
  
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
  
  /** Enable UI slowdown */
  uislowdown?: BooleanInput;
}
