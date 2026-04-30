import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './entities/event.entity';
import { EventStatus } from 'utils/constants/enums';

@Injectable()
export class EventService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createEventDto: CreateEventDto): Promise<Event> {
    // TODO: Write SQL query to insert event
    // First ensure event_type exists or create it, then insert event
    // Query should return the newly created event with id and creation_date
    const query = `-- TODO: WITH et AS (INSERT INTO event_type (name) VALUES ($8) ON CONFLICT DO NOTHING RETURNING id) 
                    -- INSERT INTO event (name, description, ticket_price, available_enrolled_quantity, sale_start_at, sale_end_at, event_starting_date, event_ending_date, event_status, event_type_id, location) 
                    -- VALUES ($1, $2, $3, $4, to_timestamp($5/1000), to_timestamp($6/1000), to_timestamp($7/1000), to_timestamp($9/1000), $10, (SELECT id FROM et), $11) RETURNING *`;
    const result = await this.databaseService.query(query);
    const row = result.rows[0] as Record<string, unknown>;
    return this.mapRowToEvent(row);
  }

  async findAll(): Promise<Event[]> {
    // TODO: Write SQL query to select all events
    const query = `-- TODO: SELECT e.*, et.name as event_type FROM event e JOIN event_type et ON e.event_type_id = et.id`;
    const result = await this.databaseService.query(query);
    return result.rows.map((row: Record<string, unknown>) => this.mapRowToEvent(row));
  }

  async findOne(id: number): Promise<Event> {
    // TODO: Write SQL query to select event by id
    const query = `-- TODO: SELECT e.*, et.name as event_type FROM event e JOIN event_type et ON e.event_type_id = et.id WHERE e.id = $1`;
    const values = [id];
    const result = await this.databaseService.query(query, values);
    const row = result.rows[0] as Record<string, unknown>;
    return this.mapRowToEvent(row);
  }

  async update(
    id: number,
    updateEventDto: UpdateEventDto,
  ): Promise<Event> {
    // TODO: Write SQL query to update event
    // Only update fields that are provided in updateEventDto
    const query = `-- TODO: UPDATE event SET ... WHERE id = $? RETURNING *`;
    const result = await this.databaseService.query(query);
    const row = result.rows[0] as Record<string, unknown>;
    return this.mapRowToEvent(row);
  }

  async remove(id: number): Promise<void> {
    // TODO: Write SQL query to delete event
    const query = `-- TODO: DELETE FROM event WHERE id = $1`;
    const values = [id];
    await this.databaseService.query(query, values);
  }

  private mapRowToEvent(row: Record<string, unknown>): Event {
    return new Event(
      row.id as number,
      row.name as string,
      row.description as string,
      row.ticket_price as number,
      row.available_enrolled_quantity as number,
      new Date(row.creation_date as string),
      new Date(row.sale_start_at as string),
      new Date(row.sale_end_at as string),
      new Date(row.event_starting_date as string),
      new Date(row.event_ending_date as string),
      row.location as string,
      row.event_status as EventStatus,
      row.event_type as string,
    );
  }
}
