import { z } from 'zod';
import { ApiProperty } from '@nestjs/swagger';
import { CreateTicketSchema } from './create-ticket.dto';

export const UpdateTicketSchema = CreateTicketSchema.partial();

export type UpdateTicketDto = z.infer<typeof UpdateTicketSchema>;

export class UpdateTicketDtoSwagger implements UpdateTicketDto {
  @ApiProperty({
    description: 'ID of the event',
    example: 1,
    minimum: 1,
    required: false,
  })
  eventId?: number;

  @ApiProperty({
    description: 'ID of the enrolled user',
    example: 1,
    minimum: 1,
    required: false,
  })
  enrolledId?: number;
}
