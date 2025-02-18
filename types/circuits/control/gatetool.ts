import type { BaseCircuitConfig } from '../../base';
import type { GateInput, CVInput } from '../../common';

/**
 * Gate tool circuit configuration
 * @see DROID manual page 235
 */
export interface GateToolConfig extends BaseCircuitConfig {
  /** Input gate */
  inputgate?: GateInput;
  
  /** Input trigger */
  inputtrigger?: GateInput;
  
  /** Input edge */
  inputedge?: GateInput;
  
  /** Reference clock for timing */
  taptempo?: GateInput;
  
  /** Gate length in seconds or clock ratio */
  gatelength?: CVInput;
  
  /** Gate stretch percentage */
  gatestretch?: CVInput;
  
  /** Minimum gate length */
  mingatelength?: CVInput;
  
  /** Maximum gate length */
  maxgatelength?: CVInput;
  
  /** Output gate */
  outputgate?: GateInput;
  
  /** Output trigger */
  outputtrigger?: GateInput;
  
  /** Output edge */
  outputedge?: GateInput;
}
