import { EventStatus } from 'utils/constants/enums';

export class Event {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public ticketPrice: number,
    public availableEnrolledQuantity: number,
    public creationDate: Date,
    public saleStartAt: Date,
    public saleEndAt: Date,
    public eventStartingDate: Date,
    public eventEndingDate: Date,
    public location: string,
    public eventStatus: EventStatus,
    public eventType: string,
  ) {}
}
