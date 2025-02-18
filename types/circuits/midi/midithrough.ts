import type { BaseCircuitConfig } from '../../base';
import type { CVInput } from '../../common';

/**
 * MIDI through circuit configuration
 * @see DROID manual page 277
 */
export interface MidiThroughConfig extends BaseCircuitConfig {
  /** TRS input port selection */
  fromtrs?: CVInput;
  
  /** USB input port selection */
  fromusb?: CVInput;
  
  /** TRS output port selection */
  totrs?: CVInput;
  
  /** USB output port selection */
  tousb?: CVInput;
}
