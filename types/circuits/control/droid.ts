import type { BaseCircuitConfig } from '../../base';
import type { CVInput, BooleanInput, GateInput } from '../../common';

/**
 * General DROID controls circuit configuration
 * @see DROID manual page 183
 */
export interface DroidConfig extends BaseCircuitConfig {
  /** LED brightness (0-1) */
  ledbrightness?: CVInput;
  
  /** Maximum voltage slope (1-8) */
  maxslope1?: CVInput;
  maxslope2?: CVInput;
  maxslope3?: CVInput;
  maxslope4?: CVInput;
  maxslope5?: CVInput;
  maxslope6?: CVInput;
  maxslope7?: CVInput;
  maxslope8?: CVInput;
  
  /** Low-pass filter (1-8) */
  lpfilter1?: CVInput;
  lpfilter2?: CVInput;
  lpfilter3?: CVInput;
  lpfilter4?: CVInput;
  lpfilter5?: CVInput;
  lpfilter6?: CVInput;
  lpfilter7?: CVInput;
  lpfilter8?: CVInput;
  
  /** M4 fader speed */
  m4faderspeed?: CVInput;
  
  /** Create status dump */
  statusdump?: GateInput;
  
  /** M4 notch power */
  m4notchpower?: CVInput;
  
  /** Start calibration */
  calibrate?: GateInput;
  
  /** Start controller upgrade */
  startcontrollerupgrade?: GateInput;
  
  /** Start X7 upgrade */
  startx7upgrade?: GateInput;
  
  /** Clear all circuits */
  clear?: GateInput;
  
  /** Factory reset all circuits */
  clearall?: GateInput;
  
  /** Enable UI slowdown */
  uislowdown?: BooleanInput;
}
