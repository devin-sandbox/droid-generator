import type { BaseCircuitConfig } from '../../base';
import type { GateInput, CVInput, BooleanInput } from '../../common';

/**
 * Algorithmic sequencer circuit configuration
 * @see DROID manual page 115
 */
export interface AlgoQuencerConfig extends BaseCircuitConfig {
  /** Clock input */
  clock?: GateInput;
  
  /** Reset trigger */
  reset?: GateInput;
  
  /** Pattern number (0-15) */
  pattern?: CVInput;
  
  /** Next pattern trigger */
  nextpattern?: GateInput;
  
  /** Previous pattern trigger */
  prevpattern?: GateInput;
  
  /** Activity level */
  activity?: CVInput;
  
  /** Pitch output */
  pitch?: CVInput;
  
  /** Gate output */
  gate?: GateInput;
  
  /** End of pattern trigger */
  endofpattern?: GateInput;
  
  /** Pattern length (1-32) */
  length?: CVInput;
  
  /** Root note (0-11) */
  root?: CVInput;
  
  /** Scale degree (0-107) */
  degree?: CVInput;
  
  /** Transpose amount */
  transpose?: CVInput;
}
