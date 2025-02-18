import { expect, test, describe } from "bun:test";
import { generatePatch } from "../patches/globalStateE4";

describe("GlobalStateE4", () => {
  test("generates valid patch with default LFOs", () => {
    const ini = generatePatch(8);
    
    // Verify LFO configuration
    expect(ini).toContain("[lfo]");
    expect(ini).toContain("sawtooth=O1");
    expect(ini).toContain("level=P3.2");
    expect(ini).toContain("hz=P3.1 * 100");
    
    // Verify button configuration
    expect(ini).toContain("[button]");
    expect(ini).toContain("shortpress=_SAVE");
    expect(ini).toContain("button=B1.2");
    expect(ini).toContain("shortpress=_LOAD");
    expect(ini).toContain("button=B1.1");
    
    // Verify motor fader configuration
    expect(ini).toContain("[motorfader]");
    expect(ini).toContain("savepreset=_SAVE");
    expect(ini).toContain("fader=1");
    expect(ini).toContain("loadpreset=_LOAD");
  });

  test("validates number of LFOs", () => {
    expect(() => generatePatch(0)).toThrow(/Number of LFOs must be between 1 and 8/);
    expect(() => generatePatch(9)).toThrow(/Number of LFOs must be between 1 and 8/);
    expect(() => generatePatch(NaN)).toThrow(/Number of LFOs must be between 1 and 8/);
  });
});
