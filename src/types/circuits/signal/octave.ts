import type { BaseCircuitConfig } from '../../base';
import type { CVInput, BooleanInput } from '../../common';

/**
 * Multi-VCO octave animator circuit configuration
 * @see DROID manual page 323
 */
export interface OctaveConfig extends BaseCircuitConfig {
  /** Input pitch CV */
  input?: CVInput;
  
  /** Octave spread amount (0-1) */
  spread?: CVInput;
  
  /** Linear detune amount */
  detune?: CVInput;
  
  /** Enable fifths mode */
  fifths?: BooleanInput;
  
  /** Output pitch CVs (1-3) */
  output1?: CVInput;
  output2?: CVInput;
  output3?: CVInput;
}
