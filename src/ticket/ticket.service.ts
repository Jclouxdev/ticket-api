import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { Ticket } from './entities/ticket.entity';

@Injectable()
export class TicketService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createTicketDto: CreateTicketDto): Promise<Ticket> {
    // TODO: Write SQL query to insert ticket
    // Query should return the newly created ticket with id and purchase_date
    const query = `-- TODO: INSERT INTO ticket (event_id, enrolled_id) VALUES ($1, $2) RETURNING *`;
    const values = [createTicketDto.eventId, createTicketDto.enrolledId];
    const result = await this.databaseService.query(query, values);
    const row = result.rows[0] as Record<string, unknown>;
    return new Ticket(row.id as number, row.event_id as number, row.enrolled_id as number, new Date(row.purchase_date as string));
  }

  async findAll(): Promise<Ticket[]> {
    // TODO: Write SQL query to select all tickets
    const query = `-- TODO: SELECT * FROM ticket`;
    const result = await this.databaseService.query(query);
    return result.rows.map(
      (row: Record<string, unknown>) => new Ticket(row.id as number, row.event_id as number, row.enrolled_id as number, new Date(row.purchase_date as string)),
    );
  }

  async findOne(id: number): Promise<Ticket> {
    // TODO: Write SQL query to select ticket by id
    const query = `-- TODO: SELECT * FROM ticket WHERE id = $1`;
    const values = [id];
    const result = await this.databaseService.query(query, values);
    const row = result.rows[0] as Record<string, unknown>;
    return new Ticket(row.id as number, row.event_id as number, row.enrolled_id as number, new Date(row.purchase_date as string));
  }

  async update(
    id: number,
    updateTicketDto: UpdateTicketDto,
  ): Promise<Ticket> {
    // TODO: Write SQL query to update ticket
    // Only update fields that are provided in updateTicketDto
    const query = `-- TODO: UPDATE ticket SET ... WHERE id = $? RETURNING *`;
    const result = await this.databaseService.query(query);
    const row = result.rows[0] as Record<string, unknown>;
    return new Ticket(row.id as number, row.event_id as number, row.enrolled_id as number, new Date(row.purchase_date as string));
  }

  async remove(id: number): Promise<void> {
    // TODO: Write SQL query to delete ticket
    const query = `-- TODO: DELETE FROM ticket WHERE id = $1`;
    const values = [id];
    await this.databaseService.query(query, values);
  }
}
