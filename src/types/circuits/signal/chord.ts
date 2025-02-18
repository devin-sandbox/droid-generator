import type { BaseCircuitConfig } from '../../base';
import type { GateInput, CVInput } from '../../common';

/**
 * Chord generator circuit configuration
 * @see DROID manual page 154
 */
export interface ChordConfig extends BaseCircuitConfig {
  /** Base pitch CV */
  pitch?: CVInput;
  
  /** Pitch spread in octaves */
  spread?: CVInput;
  
  /** Chord inversion (0-4) */
  inversion?: CVInput;
  
  /** Trigger input */
  trigger?: GateInput;
  
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
  selectfill1?: GateInput;
  /** Select alternative third */
  selectfill2?: GateInput;
  /** Select alternative fourth/fifth */
  selectfill3?: GateInput;
  /** Select alternative thirteenth */
  selectfill4?: GateInput;
  /** Select alternative seventh */
  selectfill5?: GateInput;
  
  /** First voice output */
  output1?: CVInput;
  /** Second voice output */
  output2?: CVInput;
  /** Third voice output */
  output3?: CVInput;
  /** Fourth voice output */
  output4?: CVInput;
}
