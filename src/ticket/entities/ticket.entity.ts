export class Ticket {
  constructor(
    public id: number,
    public eventId: number,
    public enrolledId: number,
    public purchaseDate: Date,
  ) {}
}
