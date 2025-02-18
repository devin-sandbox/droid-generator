import type { BaseCircuitConfig } from '../../base';
import type { GateInput, CVInput, BooleanInput, EnumInput } from '../../common';

/**
 * Encoder circuit configuration
 * @see DROID manual page 189
 */
export interface EncoderConfig extends BaseCircuitConfig {
  /** First encoder to use */
  encoder: string;
  
  /** LED ring control */
  led?: GateInput;
  
  /** Initial value */
  startvalue?: CVInput;
  
  /** Center notch width */
  notch?: CVInput;
  
  /** Output scaling */
  outputscale?: CVInput;
  
  /** Output offset */
  outputoffset?: CVInput;
  
  /** Operating mode (0=off, 1=normal, 2=bipolar, 3=positive infinity, 4=negative infinity, 5=bipolar infinity, 6=circular) */
  mode?: EnumInput;
  
  /** Output smoothing (0-1) */
  smooth?: CVInput;
  
  /** Number of discrete positions */
  discrete?: CVInput;
  
  /** Snap-to position */
  snapto?: CVInput;
  
  /** Snap force (0-1) */
  snapforce?: CVInput;
  
  /** Turn sensitivity */
  sensitivity?: CVInput;
  
  /** Auto-zoom for fine control */
  autozoom?: BooleanInput;
  
  /** LED color */
  color?: CVInput;
  
  /** LED color for negative values */
  negativecolor?: CVInput;
  
  /** LED fill mode (0=dot, 1=bar) */
  ledfill?: EnumInput;
  
  /** Output value */
  output?: CVInput;
  
  /** Button state output */
  button?: GateInput;
}
