import type { GateInput, CVInput, BooleanInput } from './common';

/**
 * Base interface for common DROID circuit parameters
 * @see DROID manual for parameter descriptions
 */
export interface BaseCircuitConfig {
  /** Enable circuit when select has positive gate signal */
  select?: GateInput;
  
  /** Value at which select should select circuit */
  selectat?: CVInput;
  
  /** Preset number to save/load (0-based) */
  preset?: CVInput;
  
  /** Trigger to load preset */
  loadpreset?: GateInput;
  
  /** Trigger to save preset */
  savepreset?: GateInput;
  
  /** Reset to default state */
  clear?: GateInput;
  
  /** Reset state and all presets */
  clearall?: GateInput;
  
  /** Don't save state to SD card */
  dontsave?: BooleanInput;
}

/**
 * Base interface for circuits with tuning capabilities
 */
export interface TuningConfig {
  /** Enable tuning mode */
  tuningmode?: BooleanInput;
  
  /** Pitch CV output during tuning */
  tuningpitch?: CVInput;
  
  /** Transpose output pitch */
  transpose?: CVInput;
}

/**
 * Base interface for circuits with MIDI channel selection
 */
export interface MidiChannelConfig {
  /** MIDI channel (1-16) */
  channel?: CVInput;
}
