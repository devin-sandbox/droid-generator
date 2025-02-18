import type { BaseCircuitConfig } from '../../base';
import type { GateInput, CVInput } from '../../common';

/**
 * Basic sequencer circuit configuration
 * @see DROID manual page 349
 */
export interface SequencerConfig extends BaseCircuitConfig {
  /** Clock input */
  clock?: GateInput;
  
  /** Reset trigger */
  reset?: GateInput;
  
  /** Step values (1-16) */
  step1?: CVInput;
  step2?: CVInput;
  step3?: CVInput;
  step4?: CVInput;
  step5?: CVInput;
  step6?: CVInput;
  step7?: CVInput;
  step8?: CVInput;
  step9?: CVInput;
  step10?: CVInput;
  step11?: CVInput;
  step12?: CVInput;
  step13?: CVInput;
  step14?: CVInput;
  step15?: CVInput;
  step16?: CVInput;
  
  /** Current step output */
  output?: CVInput;
  
  /** Gate output */
  gate?: GateInput;
  
  /** End of sequence trigger */
  endofsequence?: GateInput;
}
