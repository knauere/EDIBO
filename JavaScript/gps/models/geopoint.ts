// @ts-ignore
export {IGeoPos} from '../index.ts';

export interface IGeoPos {
    setLatLong(lat: number, lng: number): void;

    getLat():number;

    getLng():number;
}

class GeoPos implements IGeoPos {

}