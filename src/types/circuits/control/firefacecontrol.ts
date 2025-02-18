import type { BaseCircuitConfig } from '../../base';
import type { CVInput, BooleanInput } from '../../common';

/**
 * RME Fireface interface control circuit configuration
 * @see DROID manual page 228
 */
export interface FirefaceControlConfig extends BaseCircuitConfig {
  /** TRS mode */
  trs?: CVInput;
  
  /** Main output level */
  mainoutput?: CVInput;
  
  /** Output levels (1-16) */
  outputlevel1?: CVInput;
  outputlevel2?: CVInput;
  outputlevel3?: CVInput;
  outputlevel4?: CVInput;
  outputlevel5?: CVInput;
  outputlevel6?: CVInput;
  outputlevel7?: CVInput;
  outputlevel8?: CVInput;
  outputlevel9?: CVInput;
  outputlevel10?: CVInput;
  outputlevel11?: CVInput;
  outputlevel12?: CVInput;
  outputlevel13?: CVInput;
  outputlevel14?: CVInput;
  outputlevel15?: CVInput;
  outputlevel16?: CVInput;
  
  /** Phones outputs (1-2) */
  phonesoutput1?: CVInput;
  phonesoutput2?: CVInput;
  
  /** Output mix inputs (1-16) for each mix (1-16) */
  outputmix1in1?: CVInput;
  outputmix1in2?: CVInput;
  outputmix1in3?: CVInput;
  outputmix1in4?: CVInput;
  outputmix1in5?: CVInput;
  outputmix1in6?: CVInput;
  outputmix1in7?: CVInput;
  outputmix1in8?: CVInput;
  outputmix1in9?: CVInput;
  outputmix1in10?: CVInput;
  outputmix1in11?: CVInput;
  outputmix1in12?: CVInput;
  outputmix1in13?: CVInput;
  outputmix1in14?: CVInput;
  outputmix1in15?: CVInput;
  outputmix1in16?: CVInput;
  
  /** Pan controls (1-16) */
  pan1?: CVInput;
  pan2?: CVInput;
  pan3?: CVInput;
  pan4?: CVInput;
  pan5?: CVInput;
  pan6?: CVInput;
  pan7?: CVInput;
  pan8?: CVInput;
  pan9?: CVInput;
  pan10?: CVInput;
  pan11?: CVInput;
  pan12?: CVInput;
  pan13?: CVInput;
  pan14?: CVInput;
  pan15?: CVInput;
  pan16?: CVInput;
  
  /** Unmute controls (1-16) */
  unmute1?: BooleanInput;
  unmute2?: BooleanInput;
  unmute3?: BooleanInput;
  unmute4?: BooleanInput;
  unmute5?: BooleanInput;
  unmute6?: BooleanInput;
  unmute7?: BooleanInput;
  unmute8?: BooleanInput;
  unmute9?: BooleanInput;
  unmute10?: BooleanInput;
  unmute11?: BooleanInput;
  unmute12?: BooleanInput;
  unmute13?: BooleanInput;
  unmute14?: BooleanInput;
  unmute15?: BooleanInput;
  unmute16?: BooleanInput;
  
  /** Post-fader controls (1-16) */
  postfader1?: BooleanInput;
  postfader2?: BooleanInput;
  postfader3?: BooleanInput;
  postfader4?: BooleanInput;
  postfader5?: BooleanInput;
  postfader6?: BooleanInput;
  postfader7?: BooleanInput;
  postfader8?: BooleanInput;
  postfader9?: BooleanInput;
  postfader10?: BooleanInput;
  postfader11?: BooleanInput;
  postfader12?: BooleanInput;
  postfader13?: BooleanInput;
  postfader14?: BooleanInput;
  postfader15?: BooleanInput;
  postfader16?: BooleanInput;
  
  /** Update trigger */
  update?: BooleanInput;
}
