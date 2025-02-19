import { expect, test, describe } from "bun:test";
import { createSequencerPatch } from "../patches/sequencerPatch";
import { CircuitValidator } from "../validator";
import type { Circuit } from "../patch";
import type { ButtonGroupConfig } from "../types/circuits/io/buttongroup";

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

  test("layer switching activates correct faders", () => {
    const patch = createSequencerPatch();
    const circuits = patch.getCircuits();
    
    // Find encoder and switch circuits
    const encoder = circuits.find(c => c.section === 'encoder' && c.encoder === 'E2.1');
    const switches = circuits.filter(c => c.section === 'switch');
    const faders = circuits.filter(c => c.section === 'motorfader');
    
    // Verify encoder outputs control layer state
    expect(encoder?.output).toBe('_CURRENT_LAYER');
    expect(encoder?.button).toBe('_LAYER_SWITCH');
    
    // Verify each switch uses encoder button state
    switches.forEach(s => {
      expect(s.input1).toBe('_LAYER_SWITCH');
    });
    
    // Verify faders are activated by corresponding layer states
    faders.forEach((f, i) => {
      expect(f.select).toBe(`_LAYER_STATE_${i + 1}`);
      expect(f.selectat).toBe(`2${i + 1}`);
    });
  });
});
