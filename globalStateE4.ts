import { Patch } from './patch';
import type { LfoCircuit, MotorfaderCircuit, EncoderCircuit, MixerCircuit } from './types';

const MAX_ALLOWED_LFOS = 7;  // Using O1-O7 for LFOs
const LFO_SELECT = "_LFO_SELECT";
const LAYER_SELECT = "_LAYER_SELECT";
const LAYER_LFO = 0;
const LAYER_MIXER = 1;
const ITEMS_PER_PAGE = 4;  // Maximum items to show per page

function validateNumLfos(num: number): number {
  if (isNaN(num) || num < 1 || num > MAX_ALLOWED_LFOS) {
    throw new Error(`Number of LFOs must be between 1 and ${MAX_ALLOWED_LFOS}`);
  }
  return num;
}

function createLfoState(index: number): LfoCircuit {
  return {
    section: 'lfo',
    output: `O${index + 1}`,
    level: `_LEVEL_${index + 1}`,
    hz: `_HZ_${index + 1}`,
    waveform: `_WAVEFORM_${index + 1}`,
  };
}

function generatePatch(numLfos: number): string {
  const patch = new Patch();
  numLfos = validateNumLfos(numLfos);

  // Configure encoder for layer selection and pagination
  const encoder: EncoderCircuit = {
    section: 'encoder',
    encoder: 'E2.1',
    button: '1',
    buttonmode: 'toggle',
    output: LFO_SELECT,
    buttonoutput: LAYER_SELECT,
    color: '0.6',
    negativecolor: '0.2',
    discrete: `${numLfos}`,
  };
  patch.addCircuit(encoder);

  // Configure all LFOs and their faders
  Array.from({ length: numLfos }, (_, i) => {
    const lfo = createLfoState(i);
    patch.addCircuit(lfo);

    // Add faders
    const faders: MotorfaderCircuit[] = [
      {
        section: 'motorfader',
        fader: '1',
        select: LFO_SELECT,
        selectat: `${i}`,
        output: lfo.level,
      },
      {
        section: 'motorfader',
        fader: '2',
        select: LFO_SELECT,
        selectat: `${i}`,
        output: lfo.hz,
      },
      {
        section: 'motorfader',
        fader: '3',
        select: LFO_SELECT,
        selectat: `${i}`,
        output: lfo.waveform,
        notches: '7',
      },
    ];
    faders.forEach(f => patch.addCircuit(f));
  });

  // Configure mixer with all available LFOs
  const mixer: MixerCircuit = {
    section: 'mixer',
    output: 'O8',
  };
  Array.from({ length: Math.min(numLfos, ITEMS_PER_PAGE) }, (_, i) => {
    mixer[`input${i + 1}`] = `O${i + 1} * _FADER_${i + 1}_OUT`;

    // Add mixer fader
    const mixerFader: MotorfaderCircuit = {
      section: 'motorfader',
      fader: `${i + 4}`,
      select: LAYER_SELECT,
      selectat: `${LAYER_MIXER}`,
      output: `_FADER_${i + 1}_OUT`,
    };
    patch.addCircuit(mixerFader);
  });
  patch.addCircuit(mixer);

  return patch.toString();
}

// Get number of LFOs from command line or use default
const numLfos = Bun.argv[2] ? parseInt(Bun.argv[2], 10) : MAX_ALLOWED_LFOS;
console.log(generatePatch(numLfos));
