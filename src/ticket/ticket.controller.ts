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
import { TicketService } from './ticket.service';
import type { CreateTicketDto } from './dto/create-ticket.dto';
import { CreateTicketSchema, CreateTicketDtoSwagger } from './dto/create-ticket.dto';
import type { UpdateTicketDto } from './dto/update-ticket.dto';
import { UpdateTicketSchema, UpdateTicketDtoSwagger } from './dto/update-ticket.dto';
import { ZodValidationPipe } from 'src/shared/pipes/zod-validation.pipe';

@ApiTags('ticket')
@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new ticket' })
  @ApiBody({ type: CreateTicketDtoSwagger })
  @ApiResponse({ status: 201, description: 'Ticket created successfully' })
  @UsePipes(new ZodValidationPipe(CreateTicketSchema))
  create(@Body() createTicketDto: CreateTicketDto) {
    return this.ticketService.create(createTicketDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all tickets' })
  @ApiResponse({ status: 200, description: 'List of all tickets' })
  findAll() {
    return this.ticketService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a ticket by ID' })
  @ApiResponse({ status: 200, description: 'Ticket found' })
  findOne(@Param('id') id: string) {
    return this.ticketService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a ticket' })
  @ApiBody({ type: UpdateTicketDtoSwagger })
  @ApiResponse({ status: 200, description: 'Ticket updated successfully' })
  @UsePipes(new ZodValidationPipe(UpdateTicketSchema))
  update(@Param('id') id: string, @Body() updateTicketDto: UpdateTicketDto) {
    return this.ticketService.update(+id, updateTicketDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a ticket' })
  @ApiResponse({ status: 200, description: 'Ticket deleted successfully' })
  remove(@Param('id') id: string) {
    return this.ticketService.remove(+id);
  }
}
