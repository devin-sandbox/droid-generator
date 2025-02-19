import type { BaseCircuitConfig } from './base';
import type { LFOConfig } from './circuits/sequencing/lfo';
import type { MotorFaderConfig } from './circuits/io/motorfader';
import type { EncoderConfig } from './circuits/io/encoder';
import type { ButtonConfig } from './circuits/io/button';
import type { ButtonGroupConfig } from './circuits/io/buttongroup';
import type { MotoquencerConfig } from './circuits/sequencing/motoquencer';
import type { MathConfig } from './circuits/control/math';
import type { SwitchConfig } from './circuits/control/switch';

export type Circuit = BaseCircuitConfig & (
  | LFOConfig
  | MotorFaderConfig
  | EncoderConfig
  | ButtonConfig
  | ButtonGroupConfig
  | MotoquencerConfig
  | MathConfig
  | SwitchConfig
);
