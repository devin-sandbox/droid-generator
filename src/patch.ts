import { IniMap } from './index';
import type { BaseCircuitConfig } from './types/base';
import type { LFOConfig } from './types/circuits/modulation/lfo';
import type { MotorFaderConfig } from './types/circuits/io/motorfader';
import type { EncoderConfig } from './types/circuits/io/encoder';
import type { ButtonConfig } from './types/circuits/io/button';

type Circuit = 
  | (LFOConfig & { section: 'lfo' })
  | (MotorFaderConfig & { section: 'motorfader' })
  | (EncoderConfig & { section: 'encoder' })
  | (ButtonConfig & { section: 'button' });

export class Patch {
  private circuits: Circuit[] = [];
  private ini: IniMap;

  addComment(text: string): void {
    this.ini.comments.setAtLine(this.ini.size + 1, text);
  }

  addSectionHeader(title: string): void {
    this.addComment("-------------------------------------------------");
    this.addComment(title);
    this.addComment("-------------------------------------------------");
    this.addComment("");
  }

  constructor() {
    this.ini = new IniMap({
      pretty: true,
      assignment: " = ",
      lineBreak: "\n",
      commentChar: "#",
      deduplicate: false
    });
  }

  addCircuit(circuit: Circuit): void {
    this.circuits.push(circuit);
  }

  private serializeCircuit(circuit: Circuit): void {
    const section = this.ini.setSection(circuit.section);
    const entries = Object.entries(circuit).filter(([key]) => key !== 'section');
    
    for (const [key, value] of entries) {
      if (value !== undefined) {
        this.ini.set(section.id ?? section.sec, `    ${key}`, ` = ${value}`);
      }
    }
  }

  toString(): string {
    // Reset INI
    this.ini.clear();
    
    // Add LABELS comment and base configuration
    this.ini.comments.setAtLine(1, "# LABELS: master=18");
    this.ini.setSection('p2b8');
    this.ini.setSection('e4');
    this.ini.setSection('m4');
    this.ini.comments.setAtLine(this.ini.size + 1, "");
    
    // Add section headers
    this.addComment("# -------------------------------------------------");
    this.addComment("# test2");
    this.addComment("# -------------------------------------------------");
    this.addComment("");
    
    // Serialize all circuits with proper spacing
    let lastSection = '';
    for (const circuit of this.circuits) {
      if (lastSection !== circuit.section) {
        if (lastSection !== '') {
          this.ini.comments.setAtLine(this.ini.size + 1, "");
        }
      }
      this.serializeCircuit(circuit);
      lastSection = circuit.section;
    }
    
    // Add final section header
    this.ini.comments.setAtLine(this.ini.size + 1, "");
    this.addComment("# -------------------------------------------------");
    this.addComment("# test3");
    this.addComment("# -------------------------------------------------");
    
    return this.ini.toString();
  }
}
