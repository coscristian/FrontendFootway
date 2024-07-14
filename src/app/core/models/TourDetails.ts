export class TourDetails {
    constructor(
        public id: number,
        public duration: number,
        public languages: string[],
        public price: number,
        public maximumCapacity: number,
        public availableDates: Date,
        public availableTimes: Date[],
        public places: string[]
    ) {}
}