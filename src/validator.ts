import type { Circuit } from './patch';
import type { MotorFaderConfig } from './types/circuits/io/motorfader';
import type { EncoderConfig } from './types/circuits/io/encoder';
import type { ButtonConfig } from './types/circuits/io/button';

type CircuitSection = Circuit['section'];
type AllowedKeys = Record<CircuitSection, readonly string[]>;

const ALLOWED_KEYS: Record<Circuit['section'], readonly string[]> = {
  motoquencer: [
    'section',
    'clock',
    'firstfader',
    'numfaders',
    'numsteps',
    'page',
    'taptempo',
    'reset',
    'run',
    'composemode',
    'mute',
    'cvbase',
    'cvrange',
    'invert',
    'quantize',
    'cvnotches',
    'fadermode',
    'buttonmode',
    'linktonext',
    'copy',
    'paste',
    'pastefaders',
    'pastebuttons',
    'keyboardcv',
    'keyboardgate',
    'recordmode',
    'recordsilence',
    'cv',
    'gate',
    'endoftrack',
    'step',
    'root',
    'degree',
    'pattern',
    'form',
    'luckychance',
    'luckyamount',
    'startstep',
    'endstep',
    'direction',
    'pingpong',
    'autoreset',
    'gatestretch',
    'gatelength',
    'harmonicshift',
    'noteshift',
    'selectnoteshift',
    'buttoncolor',
    'startofsequence',
    'startofpart',
    'startstepout',
    'endstepout',
    'currentstep',
    'currentpage',
    'accumulator'
  ],
  lfo: [
    'section',
    'rate',
    'taptempo',
    'hz',
    'level',
    'offset',
    'bipolar',
    'randomize',
    'phase',
    'pulsewidth',
    'skew',
    'sync',
    'syncphase',
    'waveform',
    'output',
    'square',
    'sawtooth',
    'triangle',
    'ramp',
    'paraboloid',
    'sine',
    'cosine'
  ],
  motorfader: [
    'section',
    'fader',
    'position',
    'speed',
    'notches',
    'touch',
    'savepreset',
    'loadpreset'
  ],
  encoder: [
    'section',
    'encoder',
    'button',
    'led',
    'increment',
    'decrement'
  ],
  button: [
    'section',
    'button',
    'led',
    'states',
    'shortpress',
    'longpress',
    'output',
    'inverted',
    'negated',
    'offvalue',
    'onvalue',
    'value1',
    'value2',
    'value3',
    'value4',
    'doubleclickmode',
    'longpresstime',
    'startvalue',
    'select',
    'selectat',
    'preset',
    'loadpreset',
    'savepreset',
    'clear',
    'clearall',
    'dontsave'
  ]
} as const;

export class CircuitValidator {
  static validate(circuit: Circuit): void {
    const circuitType = circuit.section;
    const allowedKeys = ALLOWED_KEYS[circuitType];
    
    if (!allowedKeys) {
      throw new Error(
        `Unknown circuit type: ${circuitType}\n` +
        `Valid types are: ${Object.keys(ALLOWED_KEYS).join(', ')}`
      );
    }
    
    const circuitKeys = Object.keys(circuit);
    const invalidKeys = circuitKeys.filter(key => !allowedKeys.includes(key));
    
    if (invalidKeys.length > 0) {
      throw new Error(
        `Invalid keys found in ${circuitType} circuit:\n` +
        `Invalid: ${invalidKeys.join(', ')}\n` +
        `Allowed: ${allowedKeys.join(', ')}\n` +
        `See DROID manual for valid parameters.`
      );
    }
  }
}
