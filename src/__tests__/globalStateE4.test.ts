import { expect, test, describe } from "bun:test";
import { generatePatch } from "../patches/globalStateE4";
import { CircuitValidator } from "../validator";
import { type Circuit } from "../patch";

describe("GlobalStateE4", () => {
  test("generates valid patch", () => {
    const patch = generatePatch(7);
    expect(patch).toBeDefined();
    expect(patch).toContain("[lfo]");
    expect(patch).toContain("[button]");
    expect(patch).toContain("[motorfader]");
  });

  test("validates number of LFOs", () => {
    expect(() => generatePatch(0)).toThrow(/Number of LFOs must be between 1 and 7/);
    expect(() => generatePatch(8)).toThrow(/Number of LFOs must be between 1 and 7/);
    expect(() => generatePatch(NaN)).toThrow(/Number of LFOs must be between 1 and 7/);
  });
});
