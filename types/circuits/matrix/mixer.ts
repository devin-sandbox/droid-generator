import type { BaseCircuitConfig } from '../../base';
import type { GateInput, CVInput } from '../../common';

/**
 * CV mixer circuit configuration
 * @see DROID manual page 285
 */
export interface MixerConfig extends BaseCircuitConfig {
  /** Input CVs (1-8) */
  input1?: CVInput;
  input2?: CVInput;
  input3?: CVInput;
  input4?: CVInput;
  input5?: CVInput;
  input6?: CVInput;
  input7?: CVInput;
  input8?: CVInput;
  
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
  
  /** LED outputs for row 1 */
  led11?: CVInput;
  led12?: CVInput;
  led13?: CVInput;
  led14?: CVInput;
  
  /** LED outputs for row 2 */
  led21?: CVInput;
  led22?: CVInput;
  led23?: CVInput;
  led24?: CVInput;
  
  /** LED outputs for row 3 */
  led31?: CVInput;
  led32?: CVInput;
  led33?: CVInput;
  led34?: CVInput;
  
  /** LED outputs for row 4 */
  led41?: CVInput;
  led42?: CVInput;
  led43?: CVInput;
  led44?: CVInput;
  
  /** Sum of all inputs */
  output?: CVInput;
  
  /** Maximum of all inputs */
  maximum?: CVInput;
  
  /** Minimum of all inputs */
  minimum?: CVInput;
  
  /** Average of all inputs */
  average?: CVInput;
}
