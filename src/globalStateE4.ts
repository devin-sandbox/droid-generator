import { Patch } from './patch';
import type { LFOConfig } from './types/circuits/modulation/lfo';
import type { MotorFaderConfig } from './types/circuits/io/motorfader';
import type { EncoderConfig } from './types/circuits/io/encoder';

const MAX_ALLOWED_LFOS = 8;
const LFO_SELECT = "_LFO_SELECT";

function validateNumLfos(num: number): number {
  if (isNaN(num) || num < 1 || num > MAX_ALLOWED_LFOS) {
    throw new Error(`Number of LFOs must be between 1 and ${MAX_ALLOWED_LFOS}`);
  }
  return num;
}

function generatePatch(numLfos: number): string {
  const patch = new Patch();
  numLfos = validateNumLfos(numLfos);

  // Configure encoder for LFO selection
  patch.addCircuit({
    section: 'encoder',
    encoder: 'E2.1',
    discrete: `${numLfos}`,
    output: LFO_SELECT,
    button: '1',  // Enable button functionality
    mode: '1',    // Normal mode
    color: '0.6',  // Red for LFO selection
    negativecolor: '0.2',  // Cyan when not selected
    ledfill: '1'  // Bar mode for LED display
  });

  // Configure LFOs and their faders
  Array.from({ length: numLfos }, (_, i) => {
    // Add LFO
    patch.addCircuit({
      section: 'lfo',
      output: `O${i + 1}`,
      waveform: `_WAVEFORM_${i + 1}`,
      level: `_LEVEL_${i + 1}`,
      hz: `_HZ_${i + 1} * 100`
    });

    // Add faders
    patch.addCircuit({
      section: 'motorfader',
      fader: '1',
      select: LFO_SELECT,
      selectat: `${i}`,
      output: `_LEVEL_${i + 1}`
    });

    patch.addCircuit({
      section: 'motorfader',
      fader: '2',
      select: LFO_SELECT,
      selectat: `${i}`,
      output: `_HZ_${i + 1}`
    });

    patch.addCircuit({
      section: 'motorfader',
      fader: '3',
      select: LFO_SELECT,
      selectat: `${i}`,
      output: `_WAVEFORM_${i + 1}`,
      notches: '7'
    });
  });

  return patch.toString();
}

// Get number of LFOs from command line or use default
const numLfos = Bun.argv[2] ? parseInt(Bun.argv[2], 10) : MAX_ALLOWED_LFOS;
console.log(generatePatch(numLfos));
