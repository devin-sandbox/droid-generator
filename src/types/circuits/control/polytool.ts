import type { BaseCircuitConfig } from '../../base';
import type { GateInput, CVInput, BooleanInput } from '../../common';

/**
 * Polyphony management circuit configuration
 * Maps N input voices to M output voices with configurable allocation strategies
 * @see DROID manual page 327
 */
export interface PolyToolConfig extends BaseCircuitConfig {
  /** Input pitches (1-16) - CV inputs for each voice */
  pitchinput1?: CVInput;
  pitchinput2?: CVInput;
  pitchinput3?: CVInput;
  pitchinput4?: CVInput;
  pitchinput5?: CVInput;
  pitchinput6?: CVInput;
  pitchinput7?: CVInput;
  pitchinput8?: CVInput;
  pitchinput9?: CVInput;
  pitchinput10?: CVInput;
  pitchinput11?: CVInput;
  pitchinput12?: CVInput;
  pitchinput13?: CVInput;
  pitchinput14?: CVInput;
  pitchinput15?: CVInput;
  pitchinput16?: CVInput;
  
  /** Input gates (1-16) - Gate inputs for each voice */
  gateinput1?: GateInput;
  gateinput2?: GateInput;
  gateinput3?: GateInput;
  gateinput4?: GateInput;
  gateinput5?: GateInput;
  gateinput6?: GateInput;
  gateinput7?: GateInput;
  gateinput8?: GateInput;
  gateinput9?: GateInput;
  gateinput10?: GateInput;
  gateinput11?: GateInput;
  gateinput12?: GateInput;
  gateinput13?: GateInput;
  gateinput14?: GateInput;
  gateinput15?: GateInput;
  gateinput16?: GateInput;
  
  /** Output pitches (1-16) - CV outputs for each voice */
  pitchoutput1?: CVInput;
  pitchoutput2?: CVInput;
  pitchoutput3?: CVInput;
  pitchoutput4?: CVInput;
  pitchoutput5?: CVInput;
  pitchoutput6?: CVInput;
  pitchoutput7?: CVInput;
  pitchoutput8?: CVInput;
  pitchoutput9?: CVInput;
  pitchoutput10?: CVInput;
  pitchoutput11?: CVInput;
  pitchoutput12?: CVInput;
  pitchoutput13?: CVInput;
  pitchoutput14?: CVInput;
  pitchoutput15?: CVInput;
  pitchoutput16?: CVInput;
  
  /** Output gates (1-16) - Gate outputs for each voice */
  gateoutput1?: CVInput;
  gateoutput2?: CVInput;
  gateoutput3?: CVInput;
  gateoutput4?: CVInput;
  gateoutput5?: CVInput;
  gateoutput6?: CVInput;
  gateoutput7?: CVInput;
  gateoutput8?: CVInput;
  gateoutput9?: CVInput;
  gateoutput10?: CVInput;
  gateoutput11?: CVInput;
  gateoutput12?: CVInput;
  gateoutput13?: CVInput;
  gateoutput14?: CVInput;
  gateoutput15?: CVInput;
  gateoutput16?: CVInput;
  
  /** Enable round-robin voice allocation - Rotates through outputs when assigning new notes */
  roundrobin?: BooleanInput;
  
  /** Voice allocation mode (0=oldest note cancelled, 1=new note ignored, 2=lowest note cancelled, 3=highest note cancelled) */
  voiceallocation?: CVInput;
}
