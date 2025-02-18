import type { BaseCircuitConfig } from '../../base';
import type { GateInput, CVInput } from '../../common';

/**
 * Analog to digital converter circuit configuration
 * @see DROID manual page 113
 */
export interface AdcConfig extends BaseCircuitConfig {
  /** Input signal */
  input?: CVInput;
  
  /** Number of bits (1-12) */
  bits?: CVInput;
  
  /** Minimum input value */
  minimum?: CVInput;
  
  /** Maximum input value */
  maximum?: CVInput;
  
  /** Digital outputs (1-12) */
  bit1?: GateInput;
  bit2?: GateInput;
  bit3?: GateInput;
  bit4?: GateInput;
  bit5?: GateInput;
  bit6?: GateInput;
  bit7?: GateInput;
  bit8?: GateInput;
  bit9?: GateInput;
  bit10?: GateInput;
  bit11?: GateInput;
  bit12?: GateInput;
}
