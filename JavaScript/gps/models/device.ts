// @ts-ignore
import {IGeoPos} from "./geopoint.ts";

export interface IDevice {
    setName(name: string): void;

    setCoordinates(points: IGeoPos): void;

    listCoordinates(): IGeoPos;

}

class Device implements IDevice {

    private name: string = 'No name device';

    setName(name: string) {
        this.name = name;
    }

    // ????
    listCoordinates(): IGeoPos {
        return this.listCoordinates()
    }

    setCoordinates(points: IGeoPos): void {
    }

}

const device: IDevice = new Device();
device.setName('FirstDevice');