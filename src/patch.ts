import { IniMap } from './ini';
import type { BaseCircuitConfig } from './types/base';
import type { LFOConfig } from './types/circuits/modulation/lfo';
import type { MotorFaderConfig } from './types/circuits/io/motorfader';
import type { EncoderConfig } from './types/circuits/io/encoder';

type Circuit = 
  | (LFOConfig & { section: 'lfo' })
  | (MotorFaderConfig & { section: 'motorfader' })
  | (EncoderConfig & { section: 'encoder' });

export class Patch {
  private circuits: Circuit[] = [];
  private ini: IniMap;

  constructor() {
    this.ini = new IniMap();
    // Add base configuration
    this.ini.setSection('p2b8');
    this.ini.setSection('e4');
    this.ini.setSection('m4');
  }

  addCircuit(circuit: Circuit): void {
    this.circuits.push(circuit);
  }

  private serializeCircuit(circuit: Circuit): void {
    const section = this.ini.setSection(circuit.section);
    const entries = Object.entries(circuit).filter(([key]) => key !== 'section');
    
    for (const [key, value] of entries) {
      if (value !== undefined) {
        this.ini.set(section.id ?? section.sec, key, value);
      }
    }
  }

  toString(): string {
    // Reset INI
    this.ini.clear();
    
    // Add base configuration
    this.ini.setSection('p2b8');
    this.ini.setSection('e4');
    this.ini.setSection('m4');
    
    // Serialize all circuits
    for (const circuit of this.circuits) {
      this.serializeCircuit(circuit);
    }
    
    return this.ini.toString();
  }
}
