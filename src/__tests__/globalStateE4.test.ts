import { expect, test, describe } from "bun:test";
import { generatePatch } from "../patches/globalStateE4";
import { Patch, type Circuit } from "../patch";

describe("GlobalStateE4", () => {
  test("generatePatch uses only allowed circuit keys", () => {
    const ini = generatePatch(8);
    
    // Test that patch generation doesn't throw validation errors
    expect(() => {
      const patch = new Patch();
      const lines = ini.split('\n');
      let currentCircuit: Partial<Circuit> & { section: Circuit['section'] } = { section: 'lfo' };
      
      for (const line of lines) {
        if (line.startsWith('[')) {
          // New circuit section
          const section = line.slice(1, -1) as Circuit['section'];
          if (section !== 'p2b8' && section !== 'e4' && section !== 'm4') {
            currentCircuit = { section };
          }
        } else if (line.includes('=')) {
          // Circuit parameter
          const [key, value] = line.split('=');
          if (currentCircuit.section) {
            currentCircuit[key] = value;
          }
        } else if (line === '' && Object.keys(currentCircuit).length > 1) {
          // End of circuit, validate it
          patch.addCircuit(currentCircuit as Circuit);
          currentCircuit = { section: 'lfo' };
        }
      }
    }).not.toThrow();
  });

  test("validates number of LFOs", () => {
    expect(() => generatePatch(0)).toThrow(/Number of LFOs must be between 1 and 8/);
    expect(() => generatePatch(9)).toThrow(/Number of LFOs must be between 1 and 8/);
    expect(() => generatePatch(NaN)).toThrow(/Number of LFOs must be between 1 and 8/);
  });
});
