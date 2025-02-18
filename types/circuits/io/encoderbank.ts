import type { BaseCircuitConfig } from '../../base';
import type { GateInput, CVInput, BooleanInput } from '../../common';

/**
 * Encoder bank circuit configuration
 * @see DROID manual page 185
 */
export interface EncoderBankConfig extends BaseCircuitConfig {
  /** First encoder to use */
  firstencoder: string;
  
  /** LED outputs (1-8) */
  led1?: GateInput;
  led2?: GateInput;
  led3?: GateInput;
  led4?: GateInput;
  led5?: GateInput;
  led6?: GateInput;
  led7?: GateInput;
  led8?: GateInput;
  
  /** Initial value */
  startvalue?: CVInput;
  
  /** Center notch size */
  notch?: CVInput;
  
  /** Output scaling */
  outputscale?: CVInput;
  
  /** Output offset */
  outputoffset?: CVInput;
  
  /** Encoder mode (0-6) */
  mode?: CVInput;
  
  /** Output smoothing */
  smooth?: CVInput;
  
  /** Number of discrete steps */
  discrete?: CVInput;
  
  /** Snap-to position */
  snapto?: CVInput;
  
  /** Snap force */
  snapforce?: CVInput;
  
  /** Turn sensitivity */
  sensivity?: CVInput;
  
  /** Auto-zoom for fine control */
  autozoom?: CVInput;
  
  /** LED color */
  color?: CVInput;
  
  /** LED color for negative values */
  negativecolor?: CVInput;
  
  /** LED fill mode */
  ledfill?: BooleanInput;
  
  /** Encoder outputs (1-8) */
  output1?: CVInput;
  output2?: CVInput;
  output3?: CVInput;
  output4?: CVInput;
  output5?: CVInput;
  output6?: CVInput;
  output7?: CVInput;
  output8?: CVInput;
  
  /** Button states (1-8) */
  button1?: GateInput;
  button2?: GateInput;
  button3?: GateInput;
  button4?: GateInput;
  button5?: GateInput;
  button6?: GateInput;
  button7?: GateInput;
  button8?: GateInput;
}
