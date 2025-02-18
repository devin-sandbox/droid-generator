import type { BaseCircuitConfig } from '../../base';
import type { GateInput, CVInput } from '../../common';

/**
 * Digital-to-Analog Converter circuit configuration
 * @see DROID manual page 177
 */
export interface DACConfig extends BaseCircuitConfig {
  /** Binary input bits 1-12 */
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
  
  /** Output range minimum */
  minimum?: CVInput;
  
  /** Output range maximum */
  maximum?: CVInput;
  
  /** Analog output signal */
  output?: CVInput;
}
