import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { EventService } from './event.service';
import type { CreateEventDto } from './dto/create-event.dto';
import { CreateEventSchema, CreateEventDtoSwagger } from './dto/create-event.dto';
import type { UpdateEventDto } from './dto/update-event.dto';
import { UpdateEventSchema, UpdateEventDtoSwagger } from './dto/update-event.dto';
import { ZodValidationPipe } from 'src/shared/pipes/zod-validation.pipe';

@ApiTags('event')
@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new event' })
  @ApiBody({ type: CreateEventDtoSwagger })
  @ApiResponse({ status: 201, description: 'Event created successfully' })
  @UsePipes(new ZodValidationPipe(CreateEventSchema))
  create(@Body() createEventDto: CreateEventDto) {
    return this.eventService.create(createEventDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all events' })
  @ApiResponse({ status: 200, description: 'List of all events' })
  findAll() {
    return this.eventService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an event by ID' })
  @ApiResponse({ status: 200, description: 'Event found' })
  findOne(@Param('id') id: string) {
    return this.eventService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an event' })
  @ApiBody({ type: UpdateEventDtoSwagger })
  @ApiResponse({ status: 200, description: 'Event updated successfully' })
  @UsePipes(new ZodValidationPipe(UpdateEventSchema))
  update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventService.update(+id, updateEventDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an event' })
  @ApiResponse({ status: 200, description: 'Event deleted successfully' })
  remove(@Param('id') id: string) {
    return this.eventService.remove(+id);
  }
}
