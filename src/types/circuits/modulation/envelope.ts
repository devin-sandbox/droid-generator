import type { BaseCircuitConfig } from '../../base';
import type { GateInput, CVInput, BooleanInput } from '../../common';

/**
 * Envelope generator circuit configuration
 * @see DROID manual page 210
 */
export interface EnvelopeConfig extends BaseCircuitConfig {
  /** Gate input */
  gate?: GateInput;
  
  /** Attack time */
  attack?: CVInput;
  
  /** Decay time */
  decay?: CVInput;
  
  /** Sustain level */
  sustain?: CVInput;
  
  /** Release time */
  release?: CVInput;
  
  /** Enable retrigger */
  retrigger?: BooleanInput;
  
  /** Enable loop mode */
  loop?: BooleanInput;
  
  /** Output level */
  level?: CVInput;
  
  /** Output signal */
  output?: CVInput;
  
  /** End of attack trigger */
  attackdone?: GateInput;
  
  /** End of decay trigger */
  decaydone?: GateInput;
  
  /** End of release trigger */
  releasedone?: GateInput;
  
  /** Current stage output */
  stage?: CVInput;
}
