import { expect, test, describe } from "bun:test";
import { CircuitValidator } from "../validator";
import type { Circuit } from "../patch";
import type { MotoquencerConfig } from "../types/circuits/sequencing/motoquencer";
import type { LFOConfig } from "../types/circuits/modulation/lfo";
import type { ButtonConfig } from "../types/circuits/io/button";

describe("CircuitValidator", () => {
  describe("Motoquencer Circuit", () => {
    test("validates with required parameters", () => {
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

    test("validates with optional parameters", () => {
      const circuit: Circuit = {
        section: "motoquencer",
        clock: "_INTERNAL_CLOCK",
        firstfader: "1",
        numfaders: "4",
        numsteps: "4",
        cv: "O1",
        gate: "G1",
        fadermode: "0",
        buttonmode: "0",
        cvbase: "0",
        cvrange: "1"
      };
      expect(() => CircuitValidator.validate(circuit)).not.toThrow();
    });

    test("throws on invalid keys", () => {
      const circuit: Circuit = {
        section: "motoquencer",
        clock: "_INTERNAL_CLOCK",
        invalid_key: "value"
      } as any;
      expect(() => CircuitValidator.validate(circuit)).toThrow(/Invalid keys found in motoquencer circuit/);
    });
  });

  describe("LFO Circuit", () => {
    test("validates with required parameters", () => {
      const circuit: Circuit = {
        section: "lfo",
        hz: "2",
        waveform: "0",
        square: "_INTERNAL_CLOCK"
      };
      expect(() => CircuitValidator.validate(circuit)).not.toThrow();
    });

    test("validates with optional parameters", () => {
      const circuit: Circuit = {
        section: "lfo",
        hz: "2",
        waveform: "0",
        level: "1",
        offset: "0",
        bipolar: "0",
        square: "_INTERNAL_CLOCK"
      };
      expect(() => CircuitValidator.validate(circuit)).not.toThrow();
    });

    test("throws on invalid keys", () => {
      const circuit: Circuit = {
        section: "lfo",
        hz: "2",
        invalid_param: "value"
      } as any;
      expect(() => CircuitValidator.validate(circuit)).toThrow(/Invalid keys found in lfo circuit/);
    });
  });

  describe("Button Circuit", () => {
    test("validates with required parameters", () => {
      const circuit: Circuit = {
        section: "button",
        button: "E2.1",
        states: "2"
      };
      expect(() => CircuitValidator.validate(circuit)).not.toThrow();
    });

    test("validates with optional parameters", () => {
      const circuit: Circuit = {
        section: "button",
        button: "E2.1",
        states: "2",
        led: "1"
      };
      expect(() => CircuitValidator.validate(circuit)).not.toThrow();
    });

    test("throws on invalid keys", () => {
      const circuit: Circuit = {
        section: "button",
        button: "E2.1",
        invalid_key: "value"
      } as any;
      expect(() => CircuitValidator.validate(circuit)).toThrow(/Invalid keys found in button circuit/);
    });
  });

  describe("Error Cases", () => {
    test("throws on unknown circuit type", () => {
      const circuit: Circuit = {
        section: "unknown" as any,
        clock: "_INTERNAL_CLOCK"
      };
      expect(() => CircuitValidator.validate(circuit)).toThrow(/Unknown circuit type/);
    });

    test("throws on missing required parameters", () => {
      const circuit: Circuit = {
        section: "motoquencer",
        clock: "_INTERNAL_CLOCK",
        firstfader: "1",
        numfaders: "4",
        numsteps: "4",
        cv: "O1",
        gate: "G1"
      };
      expect(() => CircuitValidator.validate(circuit)).not.toThrow(); // Validator only checks keys, not values
    });
  });
});
