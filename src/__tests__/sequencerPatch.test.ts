import { expect, test, describe } from "bun:test";
import { createSequencerPatch } from "../patches/sequencerPatch";
import { CircuitValidator } from "../validator";

describe("SequencerPatch", () => {
  test("creates default 4-track sequencer patch", () => {
    const patch = createSequencerPatch();
    const circuits = patch.getCircuits();
    
    // Verify components
    expect(circuits.filter(c => c.section === 'motoquencer')).toHaveLength(4);
    expect(circuits.filter(c => c.section === 'button')).toHaveLength(4);
    expect(circuits.filter(c => c.section === 'lfo')).toHaveLength(1);
    
    // Verify track configurations
    const tracks = circuits.filter(c => c.section === 'motoquencer');
    tracks.forEach((track, i) => {
      expect(track.firstfader).toBe('1');  // All tracks share faders 1-4
      expect(track.page).toBe(`TRACK_${i}`);  // Each track uses a different page
      expect(track.cv).toBe(`O${i + 1}`);
      expect(track.gate).toBe(`G${i + 1}`);
      expect(track.clock).toBe('_INTERNAL_CLOCK');
      expect(track.numfaders).toBe('4');
      expect(track.numsteps).toBe('4');
    });
    
    // Verify track selection buttons
    const buttons = circuits.filter(c => c.section === 'button');
    expect(buttons).toHaveLength(4);
    
    buttons.forEach((button, i) => {
      expect(button.button).toBe(`B1.${i + 1}`);
      expect(button.states).toBe('2');
      expect(button.led).toBe(`L1.${i + 1}`);
      expect(button.output).toBe(`TRACK_${i}`);  // Output used for page selection
    });
  });

  test("supports configurable track count", () => {
    const patch = createSequencerPatch({ numTracks: 2 });
    const circuits = patch.getCircuits();
    
    // Verify components
    expect(circuits.filter(c => c.section === 'motoquencer')).toHaveLength(2);
    expect(circuits.filter(c => c.section === 'button')).toHaveLength(2);
    expect(circuits.filter(c => c.section === 'lfo')).toHaveLength(1);
  });

  test("validates track count", () => {
    expect(() => createSequencerPatch({ numTracks: 5 })).toThrow();
    expect(() => createSequencerPatch({ numTracks: 0 })).toThrow();
  });
});
