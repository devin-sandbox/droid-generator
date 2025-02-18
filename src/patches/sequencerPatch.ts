import { Patch } from '../patch';
import type { MotoquencerConfig } from '../types/circuits/sequencing/motoquencer';
import type { EncoderConfig } from '../types/circuits/io/encoder';
import { DeviceType } from '../types/devices';

interface SequencerOptions {
  numSteps?: number;
  numTracks?: number;
}

export function createSequencerPatch(options: SequencerOptions = {}) {
  const numSteps = options.numSteps ?? 16;
  const numTracks = options.numTracks ?? 4;
  const stepsPerPage = 4;
  const numPages = Math.ceil(numSteps / stepsPerPage);

  const patch = new Patch([DeviceType.P2B8, DeviceType.E4, DeviceType.M4]);
  
  // Configure encoder for layer switching
  const encoder: EncoderConfig & { section: 'encoder' } = {
    section: 'encoder',
    encoder: 'E2.1',
    discrete: numPages.toString(),
    button: '1',
    color: '0.4'  // Green for step control
  };
  patch.addCircuit(encoder);
  
  // Configure motoquencer instances for tracks
  for (let i = 0; i < numTracks; i++) {
    const motoquencer: MotoquencerConfig & { section: 'motoquencer' } = {
      section: 'motoquencer',
      clock: 'I1',
      firstfader: `${i * stepsPerPage + 1}`,
      numfaders: stepsPerPage.toString(),
      numsteps: numSteps.toString(),
      linktonext: i < numTracks - 1 ? '1' : undefined,
      cv: `O${i + 1}`,
      gate: `G${i + 1}`
    };
    patch.addCircuit(motoquencer);
  }
  
  return patch;
}
