import type { BaseCircuitConfig } from '../../base';
import type { CVInput } from '../../common';

/**
 * LFO circuit configuration
 * @see DROID manual
 */
export interface LFOConfig extends BaseCircuitConfig {
  hz?: CVInput;
  rate?: CVInput;
  taptempo?: CVInput;
  level?: CVInput;
  offset?: CVInput;
  bipolar?: CVInput;
  randomize?: CVInput;
  phase?: CVInput;
  pulsewidth?: CVInput;
  skew?: CVInput;
  sync?: CVInput;
  syncphase?: CVInput;
  waveform?: CVInput;
  output?: CVInput;
  square?: CVInput;
  sawtooth?: CVInput;
  triangle?: CVInput;
  ramp?: CVInput;
  paraboloid?: CVInput;
  sine?: CVInput;
  cosine?: CVInput;
}
