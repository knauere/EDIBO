// @ts-ignore
import {IGeoPos} from "./geopoint.ts";
// @ts-ignore
import {GeoPos} from "./geopoint.ts";

export interface IDevice {
    setName(name: string): void;

    setCoordinates(points: IGeoPos): void;

    listCoordinates(): IGeoPos;

}

class Device implements IDevice {

    private name: string = 'No name device';
    // ???
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

const device: IDevice = new Device();
device.setName('FirstDevice');
console.log(device)