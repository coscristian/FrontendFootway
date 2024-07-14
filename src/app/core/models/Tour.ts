import { TourDetails } from "./TourDetails";

export class Tour {
    constructor(
        public id: number,
        public name: string,
        public shortDescription: string,
        public longDescription: string,
        public imageUrl: string,
        public isActive: boolean,
        public tourDetails: TourDetails,
    ) {}
}