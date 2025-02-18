import type { BaseCircuitConfig } from '../../base';
import type { GateInput, CVInput, BooleanInput } from '../../common';

/**
 * CV and gate recorder circuit configuration
 * @see DROID manual page 341
 */
export interface RecorderConfig extends BaseCircuitConfig {
  /** Play button input */
  playbutton?: GateInput;
  
  /** Record button input */
  recordbutton?: GateInput;
  
  /** Stop button input */
  stopbutton?: GateInput;
  
  /** Enable loop mode */
  loop?: BooleanInput;
  
  /** Pause playback/recording */
  pause?: BooleanInput;
  
  /** Operation mode (0=stop, 1=play, 2=record) */
  mode?: CVInput;
  
  /** Playback speed (-∞ to +∞) */
  playbackspeed?: CVInput;
  
  /** Enable scrubbing mode */
  scrub?: BooleanInput;
  
  /** Scrub position (0-1) */
  scrubposition?: CVInput;
  
  /** Trim start position (0-1) */
  trimstart?: CVInput;
  
  /** Trim end position (0-1) */
  trimend?: CVInput;
  
  /** Input CV */
  cvin?: CVInput;
  
  /** Input number (0-255) */
  numberin?: CVInput;
  
  /** Input gates (1-8) */
  gatein1?: GateInput;
  gatein2?: GateInput;
  gatein3?: GateInput;
  gatein4?: GateInput;
  gatein5?: GateInput;
  gatein6?: GateInput;
  gatein7?: GateInput;
  gatein8?: GateInput;
  
  /** Clock input */
  clock?: GateInput;
  
  /** Sample trigger */
  sample?: GateInput;
  
  /** Sample time window */
  timewindow?: CVInput;
  
  /** Enable bypass mode */
  bypass?: BooleanInput;
  
  /** Save recording trigger */
  save?: GateInput;
  
  /** Load recording trigger */
  load?: GateInput;
  
  /** File number (1-9999) */
  filenumber?: CVInput;
  
  /** Record LED output */
  recordled?: GateInput;
  
  /** Play LED output */
  playled?: GateInput;
  
  /** Stop LED output */
  stopled?: GateInput;
  
  /** Output CV */
  cvout?: CVInput;
  
  /** Output number */
  numberout?: CVInput;
  
  /** Output gates (1-8) */
  gateout1?: GateInput;
  gateout2?: GateInput;
  gateout3?: GateInput;
  gateout4?: GateInput;
  gateout5?: GateInput;
  gateout6?: GateInput;
  gateout7?: GateInput;
  gateout8?: GateInput;
  
  /** Memory overflow indicator */
  overflow?: GateInput;
}
