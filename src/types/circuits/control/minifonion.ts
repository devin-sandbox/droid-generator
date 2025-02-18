import type { BaseCircuitConfig } from '../../base';
import type { GateInput, CVInput, BooleanInput } from '../../common';

/**
 * Scale quantizer circuit configuration
 * @see DROID manual page 279
 */
export interface MinifonionConfig extends BaseCircuitConfig {
  /** Input pitch */
  input?: CVInput;
  
  /** Trigger input */
  trigger?: GateInput;
  
  /** Bypass quantization */
  bypass?: BooleanInput;
  
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
  
  /** Harmonic shift (-7 to 7) */
  harmonicshift?: CVInput;
  
  /** Note shift (-24 to 24) */
  noteshift?: CVInput;
  
  /** Selected note shift (-24 to 24) */
  selectnoteshift?: CVInput;
  
  /** Enable tuning mode */
  tuningmode?: BooleanInput;
  
  /** Tuning pitch */
  tuningpitch?: CVInput;
  
  /** Transpose amount */
  transpose?: CVInput;
  
  /** Output pitch */
  output?: CVInput;
  
  /** Note change trigger */
  notechange?: GateInput;
}
