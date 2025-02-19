import { createSequencerPatch } from '../patches/sequencerPatch';
declare const Bun: { argv: string[]; exit: (code: number) => void; };

const numTracks = parseInt(Bun.argv[2] ?? '4', 10);
if (isNaN(numTracks) || numTracks < 1 || numTracks > 4) {
  console.error('Track count must be between 1 and 4');
  Bun.exit(1);
}

const patch = createSequencerPatch({ numTracks });
console.log(patch.toString());
