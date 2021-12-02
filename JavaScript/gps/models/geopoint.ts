

export interface IGeoPos {
    setLatLong(lat: number, lng: number): void;

    getLat():number;

    getLng():number;
}

export class GeoPos implements IGeoPos {

    public lat: number = 1;
    public lng: number = 1;

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


const fieldPos: GeoPos = new GeoPos(4,5);
console.log(fieldPos)

// lat: 56.95105039638951, lng: 24.059670281190392

