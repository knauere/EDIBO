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

    setName(name: string) {
        this.name = name;
    }

    listCoordinates(): IGeoPos[] {
        return [];
    }

    listDevice(): IDevice[] {
        return [];
    }

    putDevice(device: IDevice): void {
    }

    setCoordinates(points: IGeoPos[]): void {
    }

}

const field: IField = new Field();
field.setName('LU Botāniskais dārzs');
console.log(field)
const fieldPos: GeoPos = new GeoPos(56.95105039638951, 24.059670281190392);
console.log(fieldPos)