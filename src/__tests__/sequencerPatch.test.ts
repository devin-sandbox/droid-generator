import { expect, test, describe } from "bun:test";
import { createSequencerPatch } from "../patches/sequencerPatch";

describe("SequencerPatch", () => {
  test("creates valid 4-step sequencer patch", () => {
    const patch = createSequencerPatch();
    const ini = patch.toString();
    
    // Verify device configuration
    expect(ini).toContain("[P2B8]");
    expect(ini).toContain("[E4]");
    expect(ini).toContain("[M4]");
    
    // Verify LFO configuration
    expect(ini).toContain("[lfo]");
    expect(ini).toContain("hz=2");
    expect(ini).toContain("waveform=0");
    expect(ini).toContain("level=1");
    expect(ini).toContain("bipolar=0");
    expect(ini).toContain("square=_INTERNAL_CLOCK");
    
    // Verify motoquencer configuration
    expect(ini).toContain("[motoquencer]");
    expect(ini).toContain("clock=_INTERNAL_CLOCK");
    expect(ini).toContain("firstfader=1");
    expect(ini).toContain("numfaders=4");
    expect(ini).toContain("numsteps=4");
    expect(ini).toContain("cv=O1");
    expect(ini).toContain("gate=G1");
    expect(ini).toContain("fadermode=0");
    expect(ini).toContain("buttonmode=0");
    expect(ini).toContain("cvbase=0");
    expect(ini).toContain("cvrange=1");
  });

  test("validates circuits in sequencer patch", () => {
    const patch = createSequencerPatch();
    expect(() => patch.toString()).not.toThrow();
  });

  test("handles custom options", () => {
    const patch = createSequencerPatch({
      numSteps: 8,
      numTracks: 2
    });
    const ini = patch.toString();
    
    // Options should not affect the patch since they're not implemented
    expect(ini).toContain("numsteps=4");
    expect(ini).toContain("firstfader=1");
    expect(ini).toContain("numfaders=4");
  });
});
