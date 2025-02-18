import type { BaseCircuitConfig } from '../../base';
import type { GateInput, CVInput } from '../../common';

/**
 * Burst generator circuit configuration
 * @see DROID manual page 140
 */
export interface BurstConfig extends BaseCircuitConfig {
  /** Frequency control (1V/octave) */
  rate?: CVInput;
  
  /** Reference clock input */
  taptempo?: GateInput;
  
  /** Direct frequency in Hz */
  hz?: CVInput;
  
  /** Start burst trigger */
  trigger?: GateInput;
  
  /** Reset burst */
  reset?: GateInput;
  
  /** Number of triggers per burst */
  count?: CVInput;
  
  /** Number of time slots to skip */
  skip?: CVInput;
  
  /** Trigger output */
  output?: GateInput;
}
