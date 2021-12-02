// @ts-ignore
import {IGeoPos} from "./geopoint.ts";
// @ts-ignore
import {GeoPos} from "./geopoint.ts";

export interface IDevice {
    setName(name: string): void;

    setCoordinates(points: IGeoPos): void;

    listCoordinates(): IGeoPos;

}

export class Device implements IDevice {

    private name: string = 'No name device';

    private points: IGeoPos = new GeoPos(0,0);

    setName(name: string) {
        this.name = name;
    }

    listCoordinates(): IGeoPos {
        return this.points;
    }

    setCoordinates(points: IGeoPos): void {
        this.points = points;
    }

}

export const device: IDevice = new Device();
device.setName('Device1: Puķes');
device.setCoordinates(new GeoPos(56.95055180971828, 24.0608632395193));
console.log(device)

export const device2: IDevice = new Device();
device2.setName('Device2: Tauriņi');
device2.setCoordinates(new GeoPos(56.94996442590027, 24.058084313708896))
console.log(device2)

export const device3: IDevice = new Device();
device3.setName('Device2: Bites');
device3.setCoordinates(new GeoPos(56.94912016386529, 24.05802687250839))
console.log(device3)
