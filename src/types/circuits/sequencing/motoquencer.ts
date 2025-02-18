import type { BaseCircuitConfig } from '../../base';
import type { GateInput, CVInput, EnumInput, BooleanInput } from '../../common';

/**
 * Motor fader sequencer circuit configuration
 * @see DROID manual page 286
 */
export interface MotoquencerConfig extends BaseCircuitConfig {
  /** Input clock */
  clock: GateInput;
  
  /** First fader to use (1-based) */
  firstfader?: CVInput;
  
  /** Number of faders to use (max 32) */
  numfaders?: CVInput;
  
  /** Number of steps (max 32) */
  numsteps?: CVInput;
  
  /** Current page (0-based) */
  page?: CVInput;
  
  /** Reference clock for timing */
  taptempo?: GateInput;
  
  /** Reset sequence */
  reset?: GateInput;
  
  /** Run/pause sequence */
  run?: BooleanInput;
  
  /** Enable compose mode */
  composemode?: BooleanInput;
  
  /** Mute gate output */
  mute?: BooleanInput;
  
  /** CV base value (-1 to 1) */
  cvbase?: CVInput;
  
  /** CV range (0 to 1) */
  cvrange?: CVInput;
  
  /** Invert CV output */
  invert?: BooleanInput;
  
  /** Quantization mode (0=off, 1=semitones, 2=scale) */
  quantize?: EnumInput;
  
  /** Number of CV notches */
  cvnotches?: CVInput;
  
  /** Fader mode (0-7) */
  fadermode?: EnumInput;
  
  /** Button mode (0-7) */
  buttonmode?: EnumInput;
  
  /** Link to next sequencer */
  linktonext?: BooleanInput;
  
  /** Copy current page */
  copy?: GateInput;
  
  /** Paste to current page */
  paste?: GateInput;
  
  /** Paste only fader values */
  pastefaders?: GateInput;
  
  /** Paste only button values */
  pastebuttons?: GateInput;
  
  /** Keyboard CV input */
  keyboardcv?: CVInput;
  
  /** Keyboard gate input */
  keyboardgate?: GateInput;
  
  /** Enable recording */
  recordmode?: BooleanInput;
  
  /** Record silence when no key pressed */
  recordsilence?: BooleanInput;
  
  /** CV output */
  cv?: CVInput;
  
  /** Gate output */
  gate?: GateInput;
  
  /** End of sequence trigger */
  endoftrack?: GateInput;
  
  /** Current step number */
  step?: CVInput;
  
  /** Root note (0-11) */
  root?: CVInput;
  
  /** Scale degree (0-107) */
  degree?: CVInput;
  
  /** Select root note */
  select1?: GateInput;
  
  /** Select third */
  select3?: GateInput;
  
  /** Select fifth */
  select5?: GateInput;
  
  /** Select seventh */
  select7?: GateInput;
  
  /** Select ninth */
  select9?: GateInput;
  
  /** Select eleventh */
  select11?: GateInput;
  
  /** Select thirteenth */
  select13?: GateInput;
  
  /** Select alternative ninth */
  selectfill1?: BooleanInput;
  
  /** Select alternative third */
  selectfill2?: BooleanInput;
  
  /** Select alternative fourth/fifth */
  selectfill3?: BooleanInput;
  
  /** Select alternative thirteenth */
  selectfill4?: BooleanInput;
  
  /** Select alternative seventh */
  selectfill5?: BooleanInput;
  
  /** Harmonic shift (-7 to 7) */
  harmonicshift?: CVInput;
  
  /** Note shift (-24 to 24) */
  noteshift?: CVInput;
  
  /** Selected note shift (-24 to 24) */
  selectnoteshift?: CVInput;
  
  /** Button color */
  buttoncolor?: CVInput;
  
  /** Start of sequence trigger */
  startofsequence?: GateInput;
  
  /** Start of part trigger */
  startofpart?: GateInput;
  
  /** Current start step */
  startstepout?: CVInput;
  
  /** Current end step */
  endstepout?: CVInput;
  
  /** Current step being played */
  currentstep?: CVInput;
  
  /** Current page being played */
  currentpage?: CVInput;
  
  /** Pitch accumulator value */
  accumulator?: CVInput;
}
