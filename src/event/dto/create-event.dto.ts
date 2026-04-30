import { z } from 'zod';
import { ApiProperty } from '@nestjs/swagger';
import { EventStatus } from 'utils/constants/enums';

// Zod Schema for validation
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
  location: z.string().min(3).max(255),
});

export type CreateEventDto = z.infer<typeof CreateEventSchema>;

// DTO Class for Swagger documentation
export class CreateEventDtoSwagger implements CreateEventDto {
  @ApiProperty({
    description: 'Event name',
    example: 'Summer Festival 2024',
    minLength: 3,
    maxLength: 100,
  })
  name: string;

  @ApiProperty({
    description: 'Detailed event description',
    example: 'A great summer festival with music and food',
    minLength: 10,
    maxLength: 1000,
  })
  description: string;

  @ApiProperty({
    description: 'Ticket price in USD',
    example: 49.99,
    minimum: 0,
    maximum: 1000,
  })
  ticketPrice: number;

  @ApiProperty({
    description: 'Number of available tickets',
    example: 500,
    minimum: 0,
    maximum: 500000,
  })
  availableEnrolledQuantity: number;

  @ApiProperty({
    description: 'Sales start date (ISO 8601)',
    example: '2024-06-01T10:00:00Z',
    type: Date,
  })
  saleStartAt: Date;

  @ApiProperty({
    description: 'Sales end date (ISO 8601)',
    example: '2024-06-15T23:59:59Z',
    type: Date,
  })
  saleEndAt: Date;

  @ApiProperty({
    description: 'Event start date (ISO 8601)',
    example: '2024-07-01T18:00:00Z',
    type: Date,
  })
  eventStartingDate: Date;

  @ApiProperty({
    description: 'Event end date (ISO 8601)',
    example: '2024-07-01T23:00:00Z',
    type: Date,
  })
  eventEndingDate: Date;

  @ApiProperty({
    description: 'Current status of the event',
    enum: Object.values(EventStatus),
    example: EventStatus.TICKET_OFFICE_OPEN,
  })
  eventStatus: string;

  @ApiProperty({
    description: 'Event type category',
    example: 'music',
    minLength: 3,
    maxLength: 50,
  })
  eventType: string;

  @ApiProperty({
    description: 'Event location/venue',
    example: 'Central Park, New York',
    minLength: 3,
    maxLength: 255,
  })
  location: string;
}
