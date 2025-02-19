import { IniMap } from './lib/ini';
import type { BaseCircuitConfig } from './types/base';
import type { LFOConfig } from './types/circuits/modulation/lfo';
import type { MotorFaderConfig } from './types/circuits/io/motorfader';
import type { EncoderConfig } from './types/circuits/io/encoder';
import type { ButtonConfig } from './types/circuits/io/button';
import type { ButtonGroupConfig } from './types/circuits/io/buttongroup';
import type { MathConfig } from './types/circuits/control/math';
import type { MotoquencerConfig } from './types/circuits/sequencing/motoquencer';
import { DeviceType } from './types/devices';
import { CircuitValidator } from './validator';

export type Circuit = 
  | (LFOConfig & { section: 'lfo' })
  | (MotorFaderConfig & { section: 'motorfader' })
  | (EncoderConfig & { section: 'encoder' })
  | (ButtonConfig & { section: 'button' })
  | (ButtonGroupConfig & { section: 'buttongroup' })
  | (MotoquencerConfig & { section: 'motoquencer' })
  | (MathConfig & { section: 'math' })
  | ({ section: 'switch', position: string, value0: string, value1: string, output: string });

export class Patch {
  private circuits: Circuit[] = [];
  private ini: IniMap;
  private devices: DeviceType[];

  getCircuits(): readonly Circuit[] {
    return [...this.circuits];
  }

  addComment(text: string): void {
    this.ini.comments.setAtLine(this.ini.size + 1, text);
  }

  constructor(devices: DeviceType[] = [DeviceType.P2B8, DeviceType.E4, DeviceType.M4]) {
    this.devices = devices;
    this.ini = new IniMap({
      pretty: false,
      assignment: "=",
      lineBreak: "\n",
      commentChar: "#",
      deduplicate: false
    });
  }

  addCircuit(circuit: Circuit): void {
    CircuitValidator.validate(circuit);
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
    this.ini.clear();
    this.ini.comments.setAtLine(1, "# LABELS: master=18");
    this.devices.forEach(device => this.ini.setSection(device));
    
    for (const circuit of this.circuits) {
      this.serializeCircuit(circuit);
    }
    return this.ini.toString();
  }
}
