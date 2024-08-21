import { TourDetails } from "./TourDetails";

export class Place {
    constructor(
      public name: string,
      public description: string,
      public imageUrl: string
    ) {}
}

export class Tour {
    constructor(
        public id: number,
        public name: string,
        public shortDescription: string,
        public longDescription: string,
        public imageUrl: string,
        public isActive: boolean,
        public tourDetails: TourDetails,
        public tourPlaces: Place[] = []
    ) {}
}