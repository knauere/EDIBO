

export interface IGeoPos {
    setLatLong(lat: number, lng: number): void;

    getLat():number;

    getLng():number;
}

export class GeoPos implements IGeoPos {

    lat: number = 1;
    lng: number = 1;

    constructor(lat: number, lng: number) {
        this.lat = lat;
        this.lng = lng;
    }

    setLatLong(lat: number, lng: number) {
        this.lat = lat;
        this.lng = lng;

    }

    getLat(): number {
        return this.lat;
    }

    getLng(): number {
        return this.lng;
    }
}


