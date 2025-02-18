import { expect, test, describe } from "bun:test";
import { generatePatch } from "../patches/globalStateE4";
import { Patch, type Circuit } from "../patch";

describe("GlobalStateE4", () => {
  test("generates patch with valid circuit keys", () => {
    const patch = new Patch();
    
    // Add circuits to patch
    expect(() => {
      patch.addCircuit({
        section: 'lfo',
        sawtooth: 'O1',
        level: 'P3.2',
        hz: 'P3.1 * 100'
      } as Circuit);
      
      patch.addCircuit({
        section: 'button',
        button: 'B1.2',
        shortpress: '_SAVE'
      } as Circuit);
      
      patch.addCircuit({
        section: 'button',
        button: 'B1.1',
        shortpress: '_LOAD'
      } as Circuit);
      
      patch.addCircuit({
        section: 'motorfader',
        fader: '1',
        savepreset: '_SAVE',
        loadpreset: '_LOAD'
      } as Circuit);
    }).not.toThrow();
  });

  test("validates number of LFOs", () => {
    expect(() => generatePatch(0)).toThrow(/Number of LFOs must be between 1 and 8/);
    expect(() => generatePatch(9)).toThrow(/Number of LFOs must be between 1 and 8/);
    expect(() => generatePatch(NaN)).toThrow(/Number of LFOs must be between 1 and 8/);
  });
});
