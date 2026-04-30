import { z } from 'zod';
import { ApiProperty } from '@nestjs/swagger';
import { CreateEnrolledSchema } from './create-enrolled.dto';

export const UpdateEnrolledSchema = CreateEnrolledSchema.partial();

export type UpdateEnrolledDto = z.infer<typeof UpdateEnrolledSchema>;

export class UpdateEnrolledDtoSwagger implements UpdateEnrolledDto {
  @ApiProperty({
    description: 'Full name of the enrolled user',
    example: 'John Doe',
    minLength: 2,
    maxLength: 255,
    required: false,
  })
  fullName?: string;

  @ApiProperty({
    description: 'Email address (unique identifier)',
    example: 'john@example.com',
    required: false,
  })
  email?: string;
}
