import type { BaseCircuitConfig } from '../../base';
import type { GateInput, CVInput, BooleanInput } from '../../common';

/**
 * Arpeggiator circuit configuration
 * @see DROID manual page 127
 */
export interface ArpeggioConfig extends BaseCircuitConfig {
  /** Clock input */
  clock?: GateInput;
  
  /** Reset trigger */
  reset?: GateInput;
  
  /** Input pitches (1-8) */
  input1?: CVInput;
  input2?: CVInput;
  input3?: CVInput;
  input4?: CVInput;
  input5?: CVInput;
  input6?: CVInput;
  input7?: CVInput;
  input8?: CVInput;
  
  /** Input gates (1-8) */
  gate1?: GateInput;
  gate2?: GateInput;
  gate3?: GateInput;
  gate4?: GateInput;
  gate5?: GateInput;
  gate6?: GateInput;
  gate7?: GateInput;
  gate8?: GateInput;
  
  /** Arpeggio mode (0-7) */
  mode?: CVInput;
  
  /** Root note (0-11) */
  root?: CVInput;
  
  /** Scale degree (0-107) */
  degree?: CVInput;
  
  /** Transpose amount */
  transpose?: CVInput;
  
  /** Pitch output */
  output?: CVInput;
  
  /** Gate output */
  gateout?: GateInput;
  
  /** End of sequence trigger */
  endofsequence?: GateInput;
}
