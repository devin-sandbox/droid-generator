import { expect, test, describe } from "bun:test";
import { createSequencerPatch } from "../patches/sequencerPatch";
import { CircuitValidator } from "../validator";

describe("SequencerPatch", () => {
  test("creates patch with valid circuit keys", () => {
    const patch = createSequencerPatch();
    const circuits = (patch as any)._circuits;
    
    // Verify each circuit has valid keys
    for (const circuit of circuits) {
      expect(() => CircuitValidator.validate(circuit)).not.toThrow();
    }
  });

  test("handles custom options with valid circuit keys", () => {
    const patch = createSequencerPatch({
      numSteps: 8,
      numTracks: 2
    });
    const circuits = (patch as any)._circuits;
    
    // Verify each circuit has valid keys
    for (const circuit of circuits) {
      expect(() => CircuitValidator.validate(circuit)).not.toThrow();
    }
  });
});
