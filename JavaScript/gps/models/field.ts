// @ts-ignore
import {IGeoPos} from "./geopoint.ts";
// @ts-ignore
import {GeoPos} from "./geopoint.ts";
// @ts-ignore
import {IDevice} from "./device.ts";
// @ts-ignore
import {Device} from "./device.ts";

export interface IField {
    setName(name: string): void;

    putDevice(device: IDevice): void;

    listDevice(): IDevice[];

    setCoordinates(points: IGeoPos[]): void;

    listCoordinates(): IGeoPos[];

}

class Field implements IField {

    private name: string = 'No name field';
    private points: IGeoPos [] = [];
    private devices: IDevice [] = [];


    setName(name: string) {
        this.name = name;
    }

    listCoordinates(): IGeoPos[] {
        return this.points;
    }

    listDevice(): IDevice[] {
        return this.devices;
    }

    putDevice(device: IDevice): void {
        this.devices.push(device);
    }

    setCoordinates(points: IGeoPos[]): void {
        this.points = points;
    }

}

export const device: IDevice = new Device();
device.setName('Device1: Puķes');
device.setCoordinates(new GeoPos(56.95055180971828, 24.0608632395193));
console.log(device)

const field: IField = new Field();
field.setName('LU Botāniskais dārzs');
field.putDevice(device)
console.log(field)
const fieldPos: GeoPos = new GeoPos(56.95105039638951, 24.059670281190392);
console.log(fieldPos)