import { IniMap } from './lib/ini';
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
        this.ini.set(section.id ?? section.sec, `    ${key} = `, value);
      }
    }
  }

  toString(): string {
    this.ini.clear();
    this.ini.comments.setAtLine(1, "# LABELS: master=18");
    this.ini.setSection('p2b8');
    this.ini.setSection('e4');
    this.ini.setSection('m4');
    this.ini.comments.setAtLine(this.ini.size + 1, "");
    this.ini.comments.setAtLine(this.ini.size + 1, "# -------------------------------------------------");
    this.ini.comments.setAtLine(this.ini.size + 1, "# test2");
    this.ini.comments.setAtLine(this.ini.size + 1, "# -------------------------------------------------");
    this.ini.comments.setAtLine(this.ini.size + 1, "");
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
    
    this.ini.comments.setAtLine(this.ini.size + 1, "");
    this.ini.comments.setAtLine(this.ini.size + 1, "# -------------------------------------------------");
    this.ini.comments.setAtLine(this.ini.size + 1, "# test3");
    this.ini.comments.setAtLine(this.ini.size + 1, "# -------------------------------------------------");
    return this.ini.toString();
  }
}
