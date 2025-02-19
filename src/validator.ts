import type { Circuit } from './patch';
import type { MotorFaderConfig } from './types/circuits/io/motorfader';
import type { EncoderConfig } from './types/circuits/io/encoder';
import type { ButtonConfig } from './types/circuits/io/button';

type CircuitSection = 'lfo' | 'motorfader' | 'encoder' | 'button' | 'buttongroup' | 'motoquencer' | 'math' | 'switch';
type AllowedKeys = Record<CircuitSection, readonly string[]>;

const ALLOWED_KEYS: Record<CircuitSection, readonly string[]> = {
  motoquencer: [
    'section',
    'clock',
    'firstfader',
    'select',
    'selectat',
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
    'loadpreset',
    'outputscale',
    'snapforce',
    'output',
    'select',
    'selectat'
  ],
  encoder: [
    'section',
    'encoder',
    'button',
    'led',
    'startvalue',
    'notch',
    'outputscale',
    'outputoffset',
    'mode',
    'smooth',
    'discrete',
    'snapto',
    'snapforce',
    'sensitivity',
    'autozoom',
    'color',
    'negativecolor',
    'ledfill',
    'output',
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
  ],
  buttongroup: [
    'section',
    'button1', 'button2', 'button3', 'button4', 'button5', 'button6', 'button7', 'button8',
    'led1', 'led2', 'led3', 'led4', 'led5', 'led6', 'led7', 'led8',
    'value1', 'value2', 'value3', 'value4', 'value5', 'value6', 'value7', 'value8',
    'minactive', 'maxactive', 'longpresstime', 'startbutton', 'output',
    'buttonoutput1', 'buttonoutput2', 'buttonoutput3', 'buttonoutput4',
    'buttonoutput5', 'buttonoutput6', 'buttonoutput7', 'buttonoutput8',
    'buttonpress', 'longpress', 'selectionchanged', 'extrapress'
  ],
  math: [
    'section',
    'input1', 'input2',
    'sum', 'difference', 'product', 'quotient', 'modulo', 'power',
    'average', 'maximum', 'minimum', 'negation', 'reciprocal', 'amount',
    'sine', 'cosine', 'square', 'root', 'logarithm',
    'round', 'floor', 'ceil'
  ],
  switch: [
    'section',
    'position',
    'input1', 'input2', 'input3', 'input4', 'input5', 'input6', 'input7', 'input8',
    'input9', 'input10', 'input11', 'input12', 'input13', 'input14', 'input15', 'input16',
    'output'
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
