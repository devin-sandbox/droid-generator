import type { BaseCircuitConfig } from '../../base';
import type { GateInput, CVInput, EnumInput, BooleanInput } from '../../common';

/**
 * Encoder-based sequencer circuit configuration
 * @see DROID manual page 198
 */
export interface EncoquencerConfig extends BaseCircuitConfig {
  /** Encoder order (0-3) */
  zorder?: EnumInput;
  
  /** Number of E4 modules to use */
  nume4s?: CVInput;
  
  /** Show inactive states in LED ring */
  ledpreview?: BooleanInput;
  
  /** First encoder to use */
  firstfader?: CVInput;
  
  /** Number of encoders to use */
  numfaders?: CVInput;
  
  /** Number of sequence steps */
  numsteps?: CVInput;
  
  /** Input clock */
  clock: GateInput;
  
  /** CV output */
  cv?: CVInput;
  
  /** Gate output */
  gate?: GateInput;
  
  /** Reset sequence */
  reset?: GateInput;
  
  /** Current step number */
  step?: CVInput;
}
