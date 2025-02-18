import { createSequencerPatch } from '../patches/sequencerPatch';

// Create and output basic 4-step patch
const patch = createSequencerPatch();
console.log(patch.toString());
