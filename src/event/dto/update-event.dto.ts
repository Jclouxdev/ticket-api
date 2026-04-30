import { z } from 'zod';
import { ApiProperty } from '@nestjs/swagger';
import { CreateEventSchema } from './create-event.dto';

export const UpdateEventSchema = CreateEventSchema.partial();

export type UpdateEventDto = z.infer<typeof UpdateEventSchema>;

export class UpdateEventDtoSwagger implements UpdateEventDto {
  @ApiProperty({
    description: 'Event name',
    example: 'Summer Festival 2024',
    minLength: 3,
    maxLength: 100,
    required: false,
  })
  name?: string;

  @ApiProperty({
    description: 'Detailed event description',
    example: 'A great summer festival with music and food',
    minLength: 10,
    maxLength: 1000,
    required: false,
  })
  description?: string;

  @ApiProperty({
    description: 'Ticket price in USD',
    example: 49.99,
    minimum: 0,
    maximum: 1000,
    required: false,
  })
  ticketPrice?: number;

  @ApiProperty({
    description: 'Number of available tickets',
    example: 500,
    minimum: 0,
    maximum: 500000,
    required: false,
  })
  availableEnrolledQuantity?: number;

  @ApiProperty({
    description: 'Sales start date (ISO 8601)',
    example: '2024-06-01T10:00:00Z',
    type: Date,
    required: false,
  })
  saleStartAt?: Date;

  @ApiProperty({
    description: 'Sales end date (ISO 8601)',
    example: '2024-06-15T23:59:59Z',
    type: Date,
    required: false,
  })
  saleEndAt?: Date;

  @ApiProperty({
    description: 'Event start date (ISO 8601)',
    example: '2024-07-01T18:00:00Z',
    type: Date,
    required: false,
  })
  eventStartingDate?: Date;

  @ApiProperty({
    description: 'Event end date (ISO 8601)',
    example: '2024-07-01T23:00:00Z',
    type: Date,
    required: false,
  })
  eventEndingDate?: Date;

  @ApiProperty({
    description: 'Current status of the event',
    enum: ['not confirmed', 'ticket office open', 'full', 'canceled', 'closed', 'ongoing'],
    required: false,
  })
  eventStatus?: string;

  @ApiProperty({
    description: 'Event type category',
    example: 'music',
    minLength: 3,
    maxLength: 50,
    required: false,
  })
  eventType?: string;

  @ApiProperty({
    description: 'Event location/venue',
    example: 'Central Park, New York',
    minLength: 3,
    maxLength: 255,
    required: false,
  })
  location?: string;
}
