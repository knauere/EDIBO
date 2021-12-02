// @ts-ignore
import {IGeoPos} from "./geopoint.ts";
// @ts-ignore
export {IDevice} from '../index.ts';

export interface IDevice {
    Device();

    setName(name: string): void;

    setCoordinates(points: IGeoPos): void;

    listCoordinates(): IGeoPos;

}

class Device implements IDevice {
    name: 'FirstDevice';
    //two numbers?
    coordinates: number;

    Device() {
    }



}