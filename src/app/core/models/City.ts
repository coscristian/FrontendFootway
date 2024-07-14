import { Tour } from "./Tour";

export class City {
    constructor(
        public id: number,
        public name: string,
        public shortDescription: string,
        public longDescription: string,
        public imageUrl: string,
        public tours: Tour[]
    ) {}    
}

// export const cities: City[] = [
//     {id: 1, name: '1984', shortDescription: 'George Owell', longDescription: 'George Owell', imageUrl:'assets/images/London2.png'},
//     {id: 1, name: '1985', shortDescription: 'George Owell', longDescription: 'George Owell', imageUrl:'assets/images/London2.png'},
//     {id: 1, name: '1986', shortDescription: 'George Owell', longDescription: 'George Owell', imageUrl:'assets/images/London2.png'},
//     {id: 1, name: '1987', shortDescription: 'George Owell', longDescription: 'George Owell', imageUrl:'assets/images/London2.png'},    
// ];