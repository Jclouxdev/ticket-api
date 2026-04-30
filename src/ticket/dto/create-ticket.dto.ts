import { z } from 'zod';
import { ApiProperty } from '@nestjs/swagger';

export const CreateTicketSchema = z.object({
  eventId: z.number().int().positive(),
  enrolledId: z.number().int().positive(),
});

export type CreateTicketDto = z.infer<typeof CreateTicketSchema>;

export class CreateTicketDtoSwagger implements CreateTicketDto {
  @ApiProperty({
    description: 'ID of the event',
    example: 1,
    minimum: 1,
  })
  eventId: number;

  @ApiProperty({
    description: 'ID of the enrolled user',
    example: 1,
    minimum: 1,
  })
  enrolledId: number;
}
