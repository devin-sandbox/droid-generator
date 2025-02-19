import { expect, test, describe } from "bun:test";
import { createSequencerPatch } from "../patches/sequencerPatch";
import { CircuitValidator } from "../validator";

describe("SequencerPatch", () => {
  test("creates basic sequencer patch", () => {
    const patch = createSequencerPatch();
    const ini = patch.toString();
    expect(ini).toContain("[lfo]");
    expect(ini).toContain("[motoquencer]");
  });

  test("handles custom options", () => {
    const patch = createSequencerPatch({
      numSteps: 8,
      numTracks: 2
    });
    const ini = patch.toString();
    expect(ini).toContain("[lfo]");
    expect(ini).toContain("[motoquencer]");
  });
});
