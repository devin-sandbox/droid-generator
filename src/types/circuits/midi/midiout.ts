import type { BaseCircuitConfig } from '../../base';
import type { GateInput, CVInput, BooleanInput } from '../../common';

/**
 * MIDI output circuit configuration
 * @see DROID manual page 268
 */
export interface MidiOutConfig extends BaseCircuitConfig {
  /** MIDI channel (1-16) */
  channel?: CVInput;
  
  /** Enable USB output */
  usb?: BooleanInput;
  
  /** Enable TRS output */
  trs?: BooleanInput;
  
  /** Pitch inputs (1-8) */
  pitch1?: CVInput;
  pitch2?: CVInput;
  pitch3?: CVInput;
  pitch4?: CVInput;
  pitch5?: CVInput;
  pitch6?: CVInput;
  pitch7?: CVInput;
  pitch8?: CVInput;
  
  /** Gate inputs (1-8) */
  gate1?: GateInput;
  gate2?: GateInput;
  gate3?: GateInput;
  gate4?: GateInput;
  gate5?: GateInput;
  gate6?: GateInput;
  gate7?: GateInput;
  gate8?: GateInput;
  
  /** Velocity inputs (1-8) */
  velocity1?: CVInput;
  velocity2?: CVInput;
  velocity3?: CVInput;
  velocity4?: CVInput;
  velocity5?: CVInput;
  velocity6?: CVInput;
  velocity7?: CVInput;
  velocity8?: CVInput;
  
  /** Note-off velocity inputs (1-8) */
  noteoffvelocity1?: CVInput;
  noteoffvelocity2?: CVInput;
  noteoffvelocity3?: CVInput;
  noteoffvelocity4?: CVInput;
  noteoffvelocity5?: CVInput;
  noteoffvelocity6?: CVInput;
  noteoffvelocity7?: CVInput;
  noteoffvelocity8?: CVInput;
  
  /** Pressure inputs (1-8) */
  pressure1?: CVInput;
  pressure2?: CVInput;
  pressure3?: CVInput;
  pressure4?: CVInput;
  pressure5?: CVInput;
  pressure6?: CVInput;
  pressure7?: CVInput;
  pressure8?: CVInput;
  
  /** Channel pressure */
  channelpressure?: CVInput;
  
  /** Enable pitch stabilization */
  pitchstabilization?: BooleanInput;
  
  /** Trigger delay in milliseconds */
  triggerdelay?: CVInput;
  
  /** Lowest MIDI note to send */
  lowestnote?: CVInput;
  
  /** Highest MIDI note to send */
  highestnote?: CVInput;
  
  /** CC numbers to monitor (1-4) */
  ccnumber1?: CVInput;
  ccnumber2?: CVInput;
  ccnumber3?: CVInput;
  ccnumber4?: CVInput;
  
  /** Update CC values */
  updateccs?: GateInput;
  
  /** Delay initial CC updates */
  delayinitialccs?: CVInput;
  
  /** Bank number */
  bank?: CVInput;
  
  /** Program number */
  program?: CVInput;
  
  /** Program change trigger */
  programchange?: GateInput;
  
  /** Start trigger */
  start?: GateInput;
  
  /** Stop trigger */
  stop?: GateInput;
  
  /** Running state */
  running?: GateInput;
  
  /** System reset trigger */
  systemreset?: GateInput;
  
  /** All notes off trigger */
  allnotesoff?: GateInput;
  
  /** All sound off trigger */
  allsoundoff?: GateInput;
  
  /** Damper pedal state */
  damper?: GateInput;
  
  /** Portamento pedal state */
  portamento?: GateInput;
  
  /** Sostenuto pedal state */
  sostenuto?: GateInput;
  
  /** Soft pedal state */
  soft?: GateInput;
  
  /** Legato pedal state */
  legato?: GateInput;
  
  /** Clock input (16th notes) */
  clock?: GateInput;
  
  /** MIDI clock input (24 PPQN) */
  midiclock?: GateInput;
  
  /** Enable active sensing */
  activesensing?: BooleanInput;
  
  /** Maximum update rate */
  updaterate?: CVInput;
  
  /** Modulation wheel value */
  modwheel?: CVInput;
  
  /** Channel volume */
  volume?: CVInput;
  
  /** Pitch bend value */
  pitchbend?: CVInput;
  
  /** Enable pitch tracking */
  pitchtracking?: BooleanInput;
  
  /** Pitch bend range in volts */
  pitchbendrange?: CVInput;
}
