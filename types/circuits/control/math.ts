import type { BaseCircuitConfig } from '../../base';
import type { CVInput } from '../../common';

/**
 * Math operations circuit configuration
 * @see DROID manual page 248
 */
export interface MathConfig extends BaseCircuitConfig {
  /** First input value */
  input1?: CVInput;
  
  /** Second input value */
  input2?: CVInput;
  
  /** Addition output */
  sum?: CVInput;
  
  /** Subtraction output */
  difference?: CVInput;
  
  /** Multiplication output */
  product?: CVInput;
  
  /** Division output */
  quotient?: CVInput;
  
  /** Modulo output */
  modulo?: CVInput;
  
  /** Power output */
  power?: CVInput;
  
  /** Average output */
  average?: CVInput;
  
  /** Maximum output */
  maximum?: CVInput;
  
  /** Minimum output */
  minimum?: CVInput;
  
  /** Negation output */
  negation?: CVInput;
  
  /** Reciprocal output */
  reciprocal?: CVInput;
  
  /** Absolute value output */
  amount?: CVInput;
  
  /** Sine output */
  sine?: CVInput;
  
  /** Cosine output */
  cosine?: CVInput;
  
  /** Square output */
  square?: CVInput;
  
  /** Square root output */
  root?: CVInput;
  
  /** Natural logarithm output */
  logarithm?: CVInput;
  
  /** Round to nearest integer output */
  round?: CVInput;
  
  /** Floor to integer output */
  floor?: CVInput;
  
  /** Ceiling to integer output */
  ceil?: CVInput;
}
