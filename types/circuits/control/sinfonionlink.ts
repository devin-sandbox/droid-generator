import type { BaseCircuitConfig } from '../../base';
import type { GateInput, CVInput } from '../../common';

/**
 * Sinfonion sync circuit configuration
 * @see DROID manual page 353
 */
export interface SinfonionLinkConfig extends BaseCircuitConfig {
  /** Current root note (0-11) */
  root?: CVInput;
  
  /** Current scale degree (0-107) */
  degree?: CVInput;
  
  /** Current transpose amount */
  transpose?: CVInput;
  
  /** Chaotic detune amount */
  chaoticdetune?: CVInput;
  
  /** Harmonic shift (-7 to 7) */
  harmonicshift?: CVInput;
  
  /** Link state */
  linkstate?: GateInput;
  
  /** Clock output */
  clock?: GateInput;
  
  /** Reset trigger */
  reset?: GateInput;
  
  /** Step trigger */
  step?: GateInput;
  
  /** Beat trigger */
  beat?: GateInput;
}
