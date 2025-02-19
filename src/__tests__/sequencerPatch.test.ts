import { expect, test, describe } from "bun:test";
import { createSequencerPatch } from "../patches/sequencerPatch";
import { CircuitValidator } from "../validator";
import type { Circuit } from "../patch";
import type { ButtonGroupConfig } from "../types/circuits/io/buttongroup";

describe("SequencerPatch", () => {
  test("creates default 4-track sequencer patch", () => {
    const patch = createSequencerPatch();
    expect(patch).toBeDefined();
  });

  test("supports configurable track count", () => {
    const patch = createSequencerPatch({ numTracks: 2 });
    expect(patch).toBeDefined();
  });

  test("validates track count", () => {
    expect(() => createSequencerPatch({ numTracks: 5 })).toThrow();
    expect(() => createSequencerPatch({ numTracks: 0 })).toThrow();
  });
});
