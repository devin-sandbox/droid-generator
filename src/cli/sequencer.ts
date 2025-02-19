import { createSequencerPatch } from '../patches/sequencerPatch';
import type { LayerMode } from '../types/common';
declare const Bun: { argv: string[]; exit: (code: number) => void; };

const numTracks = parseInt(Bun.argv[2] ?? '4', 10);
if (isNaN(numTracks) || numTracks < 1 || numTracks > 4) {
  console.error('Track count must be between 1 and 4');
  Bun.exit(1);
}

const defaultLayer = Bun.argv[3] ?? 'step';
if (!['step', 'tempo'].includes(defaultLayer)) {
  console.error('Layer must be either "step" or "tempo"');
  Bun.exit(1);
}

const patch = createSequencerPatch({ 
  numTracks,
  defaultLayer: defaultLayer as LayerMode
});
console.log(patch.toString());
