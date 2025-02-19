import { expect, test, describe } from "bun:test";
import { generatePatch } from "../patches/globalStateE4";
import { CircuitValidator } from "../validator";
import { type Circuit } from "../patch";

describe("GlobalStateE4", () => {
  test("generatePatch uses only allowed circuit keys", () => {
    const ini = generatePatch(7);
    const lines = ini.split('\n');
    let currentCircuit: Record<string, string> = {};
    
    // Parse INI and validate each circuit
    for (const line of lines) {
      if (line.startsWith('[')) {
        const section = line.slice(1, -1);
        if (section !== 'p2b8' && section !== 'e4' && section !== 'm4') {
          currentCircuit = { section };
        }
      } else if (line.includes('=')) {
        const [key, value] = line.split('=');
        currentCircuit[key.trim()] = value.trim();
      } else if (line === '' && Object.keys(currentCircuit).length > 1) {
        // Validate circuit
        expect(() => CircuitValidator.validate(currentCircuit as unknown as Circuit)).not.toThrow();
        currentCircuit = {};
      }
    }
  });

  test("validates number of LFOs", () => {
    expect(() => generatePatch(0)).toThrow(/Number of LFOs must be between 1 and 7/);
    expect(() => generatePatch(8)).toThrow(/Number of LFOs must be between 1 and 7/);
    expect(() => generatePatch(NaN)).toThrow(/Number of LFOs must be between 1 and 7/);
  });
});
