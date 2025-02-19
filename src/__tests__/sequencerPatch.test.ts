import { expect, test, describe } from "bun:test";
import { createSequencerPatch } from "../patches/sequencerPatch";
import { CircuitValidator } from "../validator";
import type { Circuit } from "../patch";
import type { ButtonGroupConfig } from "../types/circuits/io/buttongroup";

describe("SequencerPatch", () => {
  test("creates default 4-track sequencer patch", () => {
    const patch = createSequencerPatch();
    const circuits = patch.getCircuits();
    
    // Verify components
    expect(circuits.filter(c => c.section === 'motoquencer')).toHaveLength(4);
    expect(circuits.filter(c => c.section === 'buttongroup')).toHaveLength(1);
    expect(circuits.filter(c => c.section === 'lfo')).toHaveLength(1);
    
    // Verify track configurations
    const tracks = circuits.filter(c => c.section === 'motoquencer');
    tracks.forEach((track, i) => {
      expect(track.firstfader).toBe('1');  // All tracks share faders 1-4
      expect(track.select).toBe('_SELECTED_TRACK');  // Track selection input
      expect(track.selectat).toBe(`${i}`);  // Activate when _SELECTED_TRACK matches index
      expect(track.cv).toBe(`O${i + 1}`);
      expect(track.gate).toBe(`G${i + 1}`);
      expect(track.clock).toBe('_INTERNAL_CLOCK');
      expect(track.numfaders).toBe('4');
      expect(track.numsteps).toBe('4');
    });
    
    // Verify track selection button group
    const buttonGroups = circuits.filter(c => c.section === 'buttongroup') as (Circuit & ButtonGroupConfig)[];
    expect(buttonGroups).toHaveLength(1);
    
    const buttonGroup = buttonGroups[0];
    expect(buttonGroup.button1).toBe('B1.1');
    expect(buttonGroup.button2).toBe('B1.2');
    expect(buttonGroup.button3).toBe('B1.3');
    expect(buttonGroup.button4).toBe('B1.4');
    expect(buttonGroup.led1).toBe('L1.1');
    expect(buttonGroup.led2).toBe('L1.2');
    expect(buttonGroup.led3).toBe('L1.3');
    expect(buttonGroup.led4).toBe('L1.4');
    expect(buttonGroup.value1).toBe('0');  // Track 1 selection value
    expect(buttonGroup.value2).toBe('1');  // Track 2 selection value
    expect(buttonGroup.value3).toBe('2');  // Track 3 selection value
    expect(buttonGroup.value4).toBe('3');  // Track 4 selection value
    expect(buttonGroup.maxactive).toBe('1');  // Only one track can be active at a time
    expect(buttonGroup.minactive).toBe('1');  // At least one track must be active
    expect(buttonGroup.output).toBe('_SELECTED_TRACK');
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
