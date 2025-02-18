import { IniMap } from './ini';
import { DeviceType } from '../types/devices';

/**
 * Manages DROID device configuration
 */
export class DeviceManager {
  private devices: DeviceType[] = [DeviceType.P2B8, DeviceType.E4, DeviceType.M4];

  initializeDevices(ini: IniMap): void {
    this.devices.forEach(device => ini.setSection(device));
  }

  getDevices(): DeviceType[] {
    return this.devices;
  }
}
