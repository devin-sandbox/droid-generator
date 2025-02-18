import { Patch, type Circuit } from '../patch';
import type { LFOConfig } from '../types/circuits/modulation/lfo';
import type { MotorFaderConfig } from '../types/circuits/io/motorfader';
import type { EncoderConfig } from '../types/circuits/io/encoder';

const MAX_ALLOWED_LFOS = 8;
const LFO_SELECT = "_LFO_SELECT";

function validateNumLfos(num: number): number {
  if (isNaN(num) || num < 1 || num > MAX_ALLOWED_LFOS) {
    throw new Error(`Number of LFOs must be between 1 and ${MAX_ALLOWED_LFOS}`);
  }
  return num;
}

export function generatePatch(numLfos: number = MAX_ALLOWED_LFOS): string {
  numLfos = validateNumLfos(numLfos);
  const patch = new Patch();

  patch.addCircuit({
    section: 'lfo',
    sawtooth: 'O1',
    level: 'P3.2',
    hz: 'P3.1 * 100'
  } as Circuit);

  patch.addCircuit({
    section: 'button',
    shortpress: '_SAVE',
    button: 'B1.2'
  } as Circuit);

  patch.addCircuit({
    section: 'button',
    shortpress: '_LOAD',
    button: 'B1.1'
  } as Circuit);

  patch.addCircuit({
    section: 'motorfader',
    savepreset: '_SAVE',
    fader: '1',
    loadpreset: '_LOAD'
  } as Circuit);

  return patch.toString();
}
