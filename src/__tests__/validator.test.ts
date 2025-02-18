import { expect, test, describe } from "bun:test";
import { CircuitValidator } from "../validator";
import type { Circuit } from "../patch";

describe("CircuitValidator", () => {
  test("validates motoquencer circuit with valid keys", () => {
    const circuit: Circuit = {
      section: "motoquencer",
      clock: "_INTERNAL_CLOCK",
      firstfader: "1",
      numfaders: "4",
      numsteps: "4",
      cv: "O1",
      gate: "G1"
    };
    
    expect(() => CircuitValidator.validate(circuit)).not.toThrow();
  });

  test("throws on invalid motoquencer keys", () => {
    const circuit: Circuit = {
      section: "motoquencer",
      clock: "_INTERNAL_CLOCK",
      invalid_key: "value" // Invalid key
    } as any;
    
    expect(() => CircuitValidator.validate(circuit)).toThrow();
  });

  test("validates LFO circuit with valid keys", () => {
    const circuit: Circuit = {
      section: "lfo",
      hz: "2",
      waveform: "0",
      level: "1",
      square: "_INTERNAL_CLOCK"
    };
    
    expect(() => CircuitValidator.validate(circuit)).not.toThrow();
  });

  test("throws on invalid LFO keys", () => {
    const circuit: Circuit = {
      section: "lfo",
      hz: "2",
      invalid_param: "value" // Invalid key
    } as any;
    
    expect(() => CircuitValidator.validate(circuit)).toThrow();
  });

  test("throws on unknown circuit type", () => {
    const circuit: Circuit = {
      section: "unknown" as any,
      param: "value"
    };
    
    expect(() => CircuitValidator.validate(circuit)).toThrow();
  });
});
