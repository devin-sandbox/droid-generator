import { expect, test, describe } from "bun:test";
import { createSequencerPatch } from "../patches/sequencerPatch";
import { CircuitValidator } from "../validator";
import type { Circuit } from "../patch";
import type { ButtonGroupConfig } from "../types/circuits/io/buttongroup";
import type { EncoderConfig } from "../types/circuits/io/encoder";
import type { MotorFaderConfig } from "../types/circuits/io/motorfader";

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

  test("circuits use only allowed keys", () => {
    const patch = createSequencerPatch();
    const circuits = patch.getCircuits();
    
    // Validate all circuits against allowed keys
    for (const circuit of circuits) {
      // Validate the circuit passes the validator
      expect(() => CircuitValidator.validate(circuit)).not.toThrow();
    }
  });
});
