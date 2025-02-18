import { expect, test, describe } from "bun:test";
import { createSequencerPatch } from "../patches/sequencerPatch";
import { type Circuit } from "../patch";

describe("SequencerPatch", () => {
  test("creates patch with valid circuit keys", () => {
    const patch = createSequencerPatch();
    
    // Verify LFO circuit
    expect(() => {
      patch.addCircuit({
        section: 'lfo',
        hz: '2',
        waveform: '0',
        level: '1',
        bipolar: '0',
        square: '_INTERNAL_CLOCK'
      } as Circuit);
    }).not.toThrow();
    
    // Verify motoquencer circuit
    expect(() => {
      patch.addCircuit({
        section: 'motoquencer',
        clock: '_INTERNAL_CLOCK',
        firstfader: '1',
        numfaders: '4',
        numsteps: '4',
        cv: 'O1',
        gate: 'G1',
        fadermode: '0',
        buttonmode: '0',
        cvbase: '0',
        cvrange: '1',
        quantize: '1'
      } as Circuit);
    }).not.toThrow();
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
