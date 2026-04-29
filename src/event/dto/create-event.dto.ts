import { z } from 'zod';
import { EventStatus } from 'utils/constants/enums';

export const CreateEventSchema = z.object({
  name: z.string().min(3).max(100),
  description: z.string().min(10).max(1000),
  ticketPrice: z.number().min(0).max(1000),
  availableEnrolledQuantity: z.number().min(0).max(500000),
  saleStartAt: z.coerce.date().transform((val) => val.getTime()),
  saleEndAt: z.coerce.date().transform((val) => val.getTime()),
  eventStartingDate: z.coerce.date().transform((val) => val.getTime()),
  eventEndingDate: z.coerce.date().transform((val) => val.getTime()),
  eventStatus: z.enum(EventStatus),
  eventType: z.string().min(3).max(50),
});

export type CreateEventDto = z.infer<typeof CreateEventSchema>;
