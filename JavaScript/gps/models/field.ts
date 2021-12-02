// @ts-ignore
import {IGeoPos} from "./geopoint.ts";
// @ts-ignore
import {IDevice} from "./device.ts";
// @ts-ignore
export {IField} from '../index.ts';

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

}

const field: IField = new Field();
field.setName('Meza lauks');
//field.putDevice(new Device: Device)