import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
import { EventStatus } from 'utils/constants/enums';

export class CreateEventDto {
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  @IsNotEmpty()
  name!: string;

  @IsString()
  @MinLength(10)
  @MaxLength(1000)
  @IsNotEmpty()
  description!: string;

  @IsNumber()
  @Min(0)
  @Max(1000)
  @IsNotEmpty()
  ticketPrice!: number;

  @IsNumber()
  @Min(0)
  @Max(500000)
  @IsNotEmpty()
  availableEnrolledQuantity!: number;

  @IsDate()
  @IsNotEmpty()
  saleStartAt!: Date;

  @IsDate()
  @IsNotEmpty()
  saleEndAt!: Date;

  @IsDate()
  @IsNotEmpty()
  eventStartingDate!: Date;

  @IsDate()
  @IsNotEmpty()
  eventEndingDate!: Date;

  @IsString()
  @MinLength(3)
  @MaxLength(255)
  @IsNotEmpty()
  location!: string;

  @IsNotEmpty()
  @IsEnum(EventStatus)
  eventStatus!: EventStatus;

  @IsString()
  @MinLength(3)
  @MaxLength(50)
  @IsNotEmpty()
  eventType!: string;
}
