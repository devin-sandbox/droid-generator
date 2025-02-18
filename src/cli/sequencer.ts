import { createSequencerPatch } from '../patches/sequencerPatch';

// Parse command line arguments
const args = process.argv.slice(2);
const numSteps = parseInt(args[0]) || 16;
const numTracks = parseInt(args[1]) || 4;

// Create and output patch
const patch = createSequencerPatch({ numSteps, numTracks });
console.log(patch.toString());
