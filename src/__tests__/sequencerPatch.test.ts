import { expect, test, describe } from "bun:test";
import { createSequencerPatch } from "../patches/sequencerPatch";
import { CircuitValidator } from "../validator";
import type { Circuit } from "../patch";
import type { ButtonGroupConfig } from "../types/circuits/io/buttongroup";
import type { EncoderConfig } from "../types/circuits/io/encoder";
import type { MotorFaderConfig } from "../types/circuits/io/motorfader";

describe("SequencerPatch", () => {
  test("creates default 4-track sequencer patch", () => {
    const patch = createSequencerPatch();
    expect(patch).toBeDefined();
  });

  test("supports configurable track count", () => {
    const patch = createSequencerPatch({ numTracks: 2 });
    expect(patch).toBeDefined();
  });

  test("validates track count", () => {
    expect(() => createSequencerPatch({ numTracks: 5 })).toThrow();
    expect(() => createSequencerPatch({ numTracks: 0 })).toThrow();
  });

  test("layer switching circuit validation", () => {
    const patch = createSequencerPatch();
    const validator = new CircuitValidator();
    const circuits = patch.getCircuits();
    
    // Validate all circuits
    for (const circuit of circuits) {
      expect(() => validator.validate(circuit)).not.toThrow();
    }
    
    // Verify signal connections
    const encoder = circuits.find(c => c.section === 'encoder') as Circuit & EncoderConfig;
    const switches = circuits.filter(c => c.section === 'switch');
    const faders = circuits.filter(c => c.section === 'motorfader') as (Circuit & MotorFaderConfig)[];
    
    // Check signal flow: encoder -> switches -> faders
    const layerSignal = encoder.button;
    switches.forEach(s => {
      expect(s.input1).toBe(layerSignal);
    });
    
    faders.forEach((f, i) => {
      const layerState = switches[i].output;
      expect(f.select).toBe(layerState);
    });
  });
});
