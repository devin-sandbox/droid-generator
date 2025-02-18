import type { BaseCircuitConfig } from '../../base';
import type { GateInput, CVInput, BooleanInput } from '../../common';

/**
 * Contour generator circuit configuration
 * @see DROID manual page 167
 */
export interface ContourConfig extends BaseCircuitConfig {
  /** Gate input */
  gate?: GateInput;
  
  /** Trigger input (alternative to gate) */
  trigger?: GateInput;
  
  /** Retrigger mode */
  retrigger?: BooleanInput;
  
  /** Start from zero on trigger */
  startfromzero?: BooleanInput;
  
  /** Abort attack on gate end */
  abortattack?: BooleanInput;
  
  /** Loop mode */
  loop?: BooleanInput;
  
  /** Predelay time */
  predelay?: CVInput;
  
  /** Attack time */
  attack?: CVInput;
  
  /** Hold time */
  hold?: CVInput;
  
  /** Decay time */
  decay?: CVInput;
  
  /** Sustain level */
  sustain?: CVInput;
  
  /** Release time */
  release?: CVInput;
  
  /** Swell enable */
  swell?: BooleanInput;
  
  /** Swell time */
  swelltime?: CVInput;
  
  /** Swell target level */
  swelllevel?: CVInput;
  
  /** Output level */
  level?: CVInput;
  
  /** Note velocity */
  velocity?: CVInput;
  
  /** Pitch control (1V/oct) */
  pitch?: CVInput;
  
  /** Tap tempo input */
  taptempo?: GateInput;
  
  /** Global curve shape */
  shape?: CVInput;
  
  /** Attack curve shape */
  attackshape?: CVInput;
  
  /** Decay curve shape */
  decayshape?: CVInput;
  
  /** Swell curve shape */
  swellshape?: CVInput;
  
  /** Release curve shape */
  releaseshape?: CVInput;
  
  /** Zero crossing sync input */
  zerocrossing?: CVInput;
  
  /** Output signal */
  output?: CVInput;
  
  /** Negated output */
  negated?: CVInput;
  
  /** Inverted output */
  inverted?: CVInput;
  
  /** End of predelay trigger */
  endofpredelay?: GateInput;
  
  /** End of attack trigger */
  endofattack?: GateInput;
  
  /** End of hold trigger */
  endofhold?: GateInput;
  
  /** End of decay trigger */
  endofdecay?: GateInput;
  
  /** End of release trigger */
  endofrelease?: GateInput;
}
