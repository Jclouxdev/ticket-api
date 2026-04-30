import { z } from 'zod';
import { ApiProperty } from '@nestjs/swagger';

export const CreateEnrolledSchema = z.object({
  fullName: z.string().min(2).max(255),
  email: z.string().email().max(255),
});

export type CreateEnrolledDto = z.infer<typeof CreateEnrolledSchema>;

export class CreateEnrolledDtoSwagger implements CreateEnrolledDto {
  @ApiProperty({
    description: 'Full name of the enrolled user',
    example: 'John Doe',
    minLength: 2,
    maxLength: 255,
  })
  fullName: string;

  @ApiProperty({
    description: 'Email address (unique identifier)',
    example: 'john.doe@example.com',
  })
  email: string;
}
