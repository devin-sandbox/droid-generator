import type { BaseCircuitConfig } from '../../base';
import type { GateInput, CVInput, BooleanInput } from '../../common';

/**
 * Note selection buttons circuit configuration
 * @see DROID manual page 317
 */
export interface NoteButtonsConfig extends BaseCircuitConfig {
  /** Button inputs (1-12) */
  button1?: GateInput;
  button2?: GateInput;
  button3?: GateInput;
  button4?: GateInput;
  button5?: GateInput;
  button6?: GateInput;
  button7?: GateInput;
  button8?: GateInput;
  button9?: GateInput;
  button10?: GateInput;
  button11?: GateInput;
  button12?: GateInput;
  
  /** LED outputs (1-12) */
  led1?: CVInput;
  led2?: CVInput;
  led3?: CVInput;
  led4?: CVInput;
  led5?: CVInput;
  led6?: CVInput;
  led7?: CVInput;
  led8?: CVInput;
  led9?: CVInput;
  led10?: CVInput;
  led11?: CVInput;
  led12?: CVInput;
  
  /** Clock for timing quantization */
  clock?: GateInput;
  
  /** Initial note selection (0-11) */
  startnote?: CVInput;
  
  /** Output note number (0-11) */
  output?: CVInput;
  
  /** Output note as semitone voltage */
  semitone?: CVInput;
  
  /** Gate output while button pressed */
  gate?: CVInput;
  
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
