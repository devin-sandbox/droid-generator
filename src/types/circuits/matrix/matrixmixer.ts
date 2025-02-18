import type { BaseCircuitConfig } from '../../base';
import type { GateInput, CVInput, BooleanInput } from '../../common';

/**
 * Matrix mixer circuit configuration
 * @see DROID manual page 250
 */
export interface MatrixMixerConfig extends BaseCircuitConfig {
  /** Input CVs (1-4) */
  input1?: CVInput;
  input2?: CVInput;
  input3?: CVInput;
  input4?: CVInput;
  
  /** Auxiliary inputs (1-4) */
  auxin1?: CVInput;
  auxin2?: CVInput;
  auxin3?: CVInput;
  auxin4?: CVInput;
  
  /** Mix/max mode blend (0=mix, 1=max) */
  mixmax?: CVInput;
  
  /** Initial state (0=clear, 1=diagonal, 2=all) */
  startvalue?: CVInput;
  
  /** Button inputs for row 1 */
  button11?: GateInput;
  button12?: GateInput;
  button13?: GateInput;
  button14?: GateInput;
  
  /** Button inputs for row 2 */
  button21?: GateInput;
  button22?: GateInput;
  button23?: GateInput;
  button24?: GateInput;
  
  /** Button inputs for row 3 */
  button31?: GateInput;
  button32?: GateInput;
  button33?: GateInput;
  button34?: GateInput;
  
  /** Button inputs for row 4 */
  button41?: GateInput;
  button42?: GateInput;
  button43?: GateInput;
  button44?: GateInput;
  
  /** Mixed outputs (1-4) */
  output1?: CVInput;
  output2?: CVInput;
  output3?: CVInput;
  output4?: CVInput;
  
  /** LED outputs for row 1 */
  led11?: GateInput;
  led12?: GateInput;
  led13?: GateInput;
  led14?: GateInput;
  
  /** LED outputs for row 2 */
  led21?: GateInput;
  led22?: GateInput;
  led23?: GateInput;
  led24?: GateInput;
  
  /** LED outputs for row 3 */
  led31?: GateInput;
  led32?: GateInput;
  led33?: GateInput;
  led34?: GateInput;
  
  /** LED outputs for row 4 */
  led41?: GateInput;
  led42?: GateInput;
  led43?: GateInput;
  led44?: GateInput;
}
