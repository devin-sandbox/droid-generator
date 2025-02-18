import type { BaseCircuitConfig } from '../../base';
import type { GateInput, CVInput } from '../../common';

/**
 * Logic operations circuit configuration
 * @see DROID manual page 245
 */
export interface LogicConfig extends BaseCircuitConfig {
  /** Input gates (1-8) */
  input1?: GateInput;
  input2?: GateInput;
  input3?: GateInput;
  input4?: GateInput;
  input5?: GateInput;
  input6?: GateInput;
  input7?: GateInput;
  input8?: GateInput;
  
  /** Input threshold */
  threshold?: CVInput;
  
  /** Output value for logic low */
  lowvalue?: CVInput;
  
  /** Output value for logic high */
  highvalue?: CVInput;
  
  /** Count value */
  countvalue?: CVInput;
  
  /** AND output */
  and?: GateInput;
  
  /** OR output */
  or?: GateInput;
  
  /** XOR output */
  xor?: GateInput;
  
  /** NAND output */
  nand?: GateInput;
  
  /** NOR output */
  nor?: GateInput;
  
  /** Negated output */
  negated?: GateInput;
  
  /** Count of high inputs */
  count?: CVInput;
  
  /** Count of low inputs */
  countlow?: CVInput;
}
