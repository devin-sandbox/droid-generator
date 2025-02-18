import type { Circuit } from './patch';
import type { MotorFaderConfig } from './types/circuits/io/motorfader';
import type { EncoderConfig } from './types/circuits/io/encoder';
import type { ButtonConfig } from './types/circuits/io/button';

type CircuitSection = Circuit['section'];
type AllowedKeys = Record<CircuitSection, readonly string[]>;

const ALLOWED_KEYS: Record<Circuit['section'], readonly string[]> = {
  motorfader: [
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
    'autoreset'
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
    'touch'
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
    'states'
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
