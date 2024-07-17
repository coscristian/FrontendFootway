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