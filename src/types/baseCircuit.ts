/**
 * Base interface for common DROID circuit parameters
 */
interface BaseCircuitConfig {
  /** Enable circuit when select has positive gate signal */
  select?: string;
  
  /** Value at which select should select circuit */
  selectat?: string;
  
  /** Preset number to save/load (0-based) */
  preset?: string;
  
  /** Trigger to load preset */
  loadpreset?: string;
  
  /** Trigger to save preset */
  savepreset?: string;
  
  /** Reset to default state */
  clear?: string;
  
  /** Reset state and all presets */
  clearall?: string;
  
  /** Don't save state to SD card */
  dontsave?: string;
}

export type { BaseCircuitConfig };
