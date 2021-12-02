/*
 1. Uztaisīt lauks: Field
          Nosaukums
          Masīvs ar koordinātēm.  {lat:60.203, lng: 15.1239}[]
          Masīvs ar iekārtām

 2. Laukā var ievietot iekārtas ar GPS trekeriem
          Nosaukums
          Koordinātes: {lat:60.3123, lng: 15.123}

 3. uzrakstīt scenāriju, kur: ar deno run index.ts es:
       1 izveidot lauku
       2 laukam pievienot 3 iekārtas
       3 laukam pievienot GPS koordinātu tīklu
       4 katrai iekārtai pievienot gps koordinātes
       5 redzēt pilnu lauka informāciju ar visām iekārtām un to koordinātēm.
 */

// @ts-ignore
import {IGeoPos} from './models/geopoint.ts';
// @ts-ignore
import {IField} from './models/field.ts';
// @ts-ignore
import {IDevice} from './models/device.ts';

class Field implements IField {

}

class Device implements IDevice {
}

class GeoPoint implements IGeoPos {
    lat: number;
    lng: number;
}