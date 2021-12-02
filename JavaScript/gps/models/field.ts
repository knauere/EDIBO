// @ts-ignore
import {IGeoPos} from "./geopoint.ts";
// @ts-ignore
export {IField} from '../index.ts';

export interface IField {
    setName(name: string): void;

    putDevice(device: Device): void;

    listDevice(): Device[];

    setCoordinates(points: IGeoPos[]): void;

    listCoordinates(): IGeoPos[];

}

class Field implements IField {

}