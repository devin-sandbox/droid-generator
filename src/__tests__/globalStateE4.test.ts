import { expect, test, describe } from "bun:test";
import { generatePatch } from "../patches/globalStateE4";
import { CircuitValidator } from "../validator";

describe("GlobalStateE4", () => {
  test("generatePatch uses only allowed circuit keys", () => {
    const patch = generatePatch(8);
    const circuits = (patch as any)._circuits;
    
    // Verify each circuit has valid keys
    for (const circuit of circuits) {
      expect(() => CircuitValidator.validate(circuit)).not.toThrow();
    }
  });

  test("validates number of LFOs", () => {
    expect(() => generatePatch(0)).toThrow(/Number of LFOs must be between 1 and 8/);
    expect(() => generatePatch(9)).toThrow(/Number of LFOs must be between 1 and 8/);
    expect(() => generatePatch(NaN)).toThrow(/Number of LFOs must be between 1 and 8/);
  });
});
