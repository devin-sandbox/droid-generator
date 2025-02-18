import { expect, test, describe } from "bun:test";
import { Patch } from "../patch";
import { DeviceType } from "../types/devices";

describe("Patch", () => {
  test("validates circuit before adding", () => {
    const patch = new Patch([DeviceType.P2B8]);
    
    // Valid circuit should not throw
    expect(() => patch.addCircuit({
      section: "lfo",
      hz: "2",
      waveform: "0",
      square: "_INTERNAL_CLOCK"
    })).not.toThrow();
    
    // Invalid circuit should throw
    expect(() => patch.addCircuit({
      section: "lfo",
      invalid_key: "value"
    } as any)).toThrow(/Invalid keys found in lfo circuit/);
  });

  test("generates valid INI after validation", () => {
    const patch = new Patch([DeviceType.P2B8]);
    patch.addCircuit({
      section: "lfo",
      hz: "2",
      waveform: "0",
      square: "_INTERNAL_CLOCK"
    });
    
    const ini = patch.toString();
    expect(ini).toContain("[lfo]");
    expect(ini).toContain("hz=2");
    expect(ini).toContain("waveform=0");
    expect(ini).toContain("square=_INTERNAL_CLOCK");
  });

  test("validates motoquencer circuit", () => {
    const patch = new Patch([DeviceType.P2B8, DeviceType.M4]);
    
    // Valid motoquencer should not throw
    expect(() => patch.addCircuit({
      section: "motoquencer",
      clock: "_INTERNAL_CLOCK",
      firstfader: "1",
      numfaders: "4",
      numsteps: "4",
      cv: "O1",
      gate: "G1"
    })).not.toThrow();
    
    // Invalid motoquencer should throw
    expect(() => patch.addCircuit({
      section: "motoquencer",
      invalid_key: "value"
    } as any)).toThrow(/Invalid keys found in motoquencer circuit/);
  });

  test("validates button circuit", () => {
    const patch = new Patch([DeviceType.P2B8]);
    
    // Valid button should not throw
    expect(() => patch.addCircuit({
      section: "button",
      button: "E2.1",
      states: "2"
    })).not.toThrow();
    
    // Invalid button should throw
    expect(() => patch.addCircuit({
      section: "button",
      invalid_key: "value"
    } as any)).toThrow(/Invalid keys found in button circuit/);
  });
});
