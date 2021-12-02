// @ts-ignore
import {IGeoPos} from "./geopoint.ts";
// @ts-ignore
export {IDevice} from '../index.ts';

export interface IDevice {
    setName(name: string): void;

    setCoordinates(points: IGeoPos): void;

    listCoordinates(): IGeoPos;

}

class Device implements IDevice {
    //two numbers?
    coordinates: number;

    private name: string = 'No name device';

    setName(name: string) {
        this.name = name;
    }

}

const device: IDevice = new Device();
device.setName('FirstDevice');