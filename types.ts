// Base interface for all circuit properties
interface CircuitBase {
  id?: string;
  section: string;
}

// Circuit type interfaces
interface LfoCircuit extends CircuitBase {
  section: 'lfo';
  output?: string;
  waveform?: string;
  level?: string;
  hz?: string;
}

interface ButtonCircuit extends CircuitBase {
  section: 'button';
  shortpress?: string;
  button?: string;
}

interface MotorfaderCircuit extends CircuitBase {
  section: 'motorfader';
  fader?: string;
  savepreset?: string;
  loadpreset?: string;
  select?: string;
  selectat?: string;
  output?: string;
  notches?: string;
}

interface MixerCircuit extends CircuitBase {
  section: 'mixer';
  output?: string;
  [key: `input${number}`]: string;
}

interface EncoderCircuit extends CircuitBase {
  section: 'encoder';
  encoder?: string;
  button?: string;
  buttonmode?: string;
  output?: string;
  buttonoutput?: string;
  color?: string;
  negativecolor?: string;
  discrete?: string;
}

type Circuit = LfoCircuit | ButtonCircuit | MotorfaderCircuit | MixerCircuit | EncoderCircuit;

// Export all types
export type {
  CircuitBase,
  LfoCircuit,
  ButtonCircuit,
  MotorfaderCircuit,
  MixerCircuit,
  EncoderCircuit,
  Circuit
};
