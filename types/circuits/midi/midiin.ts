import type { BaseCircuitConfig } from '../../base';
import type { GateInput, CVInput, EnumInput, BooleanInput } from '../../common';

/**
 * MIDI input circuit configuration
 * @see DROID manual page 260
 */
export interface MidiInConfig extends BaseCircuitConfig {
  /** TRS port selection */
  trs?: CVInput;
  
  /** USB port selection */
  usb?: CVInput;
  
  /** Initial running state */
  initialrunning?: EnumInput;
  
  /** System reset trigger */
  systemreset?: GateInput;
  
  /** MIDI channel (1-16) */
  channel?: CVInput;
  
  /** Enable tuning mode */
  tuningmode?: BooleanInput;
  
  /** Tuning pitch CV */
  tuningpitch?: CVInput;
  
  /** Transpose output pitch */
  transpose?: CVInput;
  
  /** Hold velocity after note off */
  holdvelocity?: BooleanInput;
  
  /** Pitch bend range in volts */
  pitchbendrange?: CVInput;
  
  /** Apply pitch bend directly */
  bendpitch?: BooleanInput;
  
  /** Voice allocation mode */
  voiceallocation?: EnumInput;
  
  /** Round-robin voice selection */
  roundrobin?: BooleanInput;
  
  /** Note gap in milliseconds */
  notegap?: CVInput;
  
  /** CC numbers to monitor (1-4) */
  ccnumber1?: CVInput;
  ccnumber2?: CVInput;
  ccnumber3?: CVInput;
  ccnumber4?: CVInput;
  
  /** Lowest MIDI note to process */
  lowestnote?: CVInput;
  
  /** Highest MIDI note to process */
  highestnote?: CVInput;
  
  /** Individual note triggers (1-16) */
  note1?: CVInput;
  note2?: CVInput;
  note3?: CVInput;
  note4?: CVInput;
  note5?: CVInput;
  note6?: CVInput;
  note7?: CVInput;
  note8?: CVInput;
  note9?: CVInput;
  note10?: CVInput;
  note11?: CVInput;
  note12?: CVInput;
  note13?: CVInput;
  note14?: CVInput;
  note15?: CVInput;
  note16?: CVInput;
  
  /** Pitch outputs (1-8) */
  pitch1?: CVInput;
  pitch2?: CVInput;
  pitch3?: CVInput;
  pitch4?: CVInput;
  pitch5?: CVInput;
  pitch6?: CVInput;
  pitch7?: CVInput;
  pitch8?: CVInput;
  
  /** Gate outputs (1-8) */
  gate1?: GateInput;
  gate2?: GateInput;
  gate3?: GateInput;
  gate4?: GateInput;
  gate5?: GateInput;
  gate6?: GateInput;
  gate7?: GateInput;
  gate8?: GateInput;
  
  /** Velocity outputs (1-8) */
  velocity1?: CVInput;
  velocity2?: CVInput;
  velocity3?: CVInput;
  velocity4?: CVInput;
  velocity5?: CVInput;
  velocity6?: CVInput;
  velocity7?: CVInput;
  velocity8?: CVInput;
  
  /** Pressure outputs (1-8) */
  pressure1?: CVInput;
  pressure2?: CVInput;
  pressure3?: CVInput;
  pressure4?: CVInput;
  pressure5?: CVInput;
  pressure6?: CVInput;
  pressure7?: CVInput;
  pressure8?: CVInput;
  
  /** Trigger outputs (1-8) */
  trigger1?: GateInput;
  trigger2?: GateInput;
  trigger3?: GateInput;
  trigger4?: GateInput;
  trigger5?: GateInput;
  trigger6?: GateInput;
  trigger7?: GateInput;
  trigger8?: GateInput;
  
  /** CC value outputs (1-4) */
  cc1?: CVInput;
  cc2?: CVInput;
  cc3?: CVInput;
  cc4?: CVInput;
  
  /** CC trigger outputs (1-4) */
  cctrigger1?: GateInput;
  cctrigger2?: GateInput;
  cctrigger3?: GateInput;
  cctrigger4?: GateInput;
  
  /** Note gate outputs (1-16) */
  notegate1?: GateInput;
  notegate2?: GateInput;
  notegate3?: GateInput;
  notegate4?: GateInput;
  notegate5?: GateInput;
  notegate6?: GateInput;
  notegate7?: GateInput;
  notegate8?: GateInput;
  notegate9?: GateInput;
  notegate10?: GateInput;
  notegate11?: GateInput;
  notegate12?: GateInput;
  notegate13?: GateInput;
  notegate14?: GateInput;
  notegate15?: GateInput;
  notegate16?: GateInput;
  
  /** Clock outputs */
  clock?: GateInput;
  clock8?: GateInput;
  clock8t?: GateInput;
  clock16?: GateInput;
  clock4?: GateInput;
  midiclock?: GateInput;
  
  /** Transport outputs */
  start?: GateInput;
  continue?: GateInput;
  stop?: GateInput;
  running?: GateInput;
  active?: GateInput;
  
  /** Control outputs */
  pitchbend?: CVInput;
  programchange?: GateInput;
  program?: CVInput;
  bank?: CVInput;
  modwheel?: CVInput;
  volume?: CVInput;
  portamento?: GateInput;
  soft?: GateInput;
}
