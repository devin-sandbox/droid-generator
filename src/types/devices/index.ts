import type { BaseCircuitConfig } from '../base';

/**
 * DROID device types
 */
export enum DeviceType {
  /** Push button controller with 8 buttons */
  P2B8 = 'p2b8',
  /** Encoder controller */
  E4 = 'e4',
  /** Motor fader controller */
  M4 = 'm4'
}

/**
 * Base interface for DROID device configuration
 */
export interface DeviceConfig extends BaseCircuitConfig {
  /** Device type */
  type: DeviceType;
}
