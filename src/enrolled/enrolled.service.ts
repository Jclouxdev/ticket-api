import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateEnrolledDto } from './dto/create-enrolled.dto';
import { UpdateEnrolledDto } from './dto/update-enrolled.dto';
import { Enrolled } from './entities/enrolled.entity';

@Injectable()
export class EnrolledService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createEnrolledDto: CreateEnrolledDto): Promise<Enrolled> {
    // TODO: Write SQL query to insert enrolled
    // Query should return the newly created enrolled with id
    const query = `-- TODO: INSERT INTO enrolled (full_name, email) VALUES ($1, $2) RETURNING *`;
    const values = [createEnrolledDto.fullName, createEnrolledDto.email];
    const result = await this.databaseService.query(query, values);
    const row = result.rows[0] as Record<string, unknown>;
    return new Enrolled(row.id as number, row.full_name as string, row.email as string);
  }

  async findAll(): Promise<Enrolled[]> {
    // TODO: Write SQL query to select all enrolled
    const query = `-- TODO: SELECT * FROM enrolled`;
    const result = await this.databaseService.query(query);
    return result.rows.map(
      (row: Record<string, unknown>) => new Enrolled(row.id as number, row.full_name as string, row.email as string),
    );
  }

  async findOne(id: number): Promise<Enrolled> {
    // TODO: Write SQL query to select enrolled by id
    const query = `-- TODO: SELECT * FROM enrolled WHERE id = $1`;
    const values = [id];
    const result = await this.databaseService.query(query, values);
    const row = result.rows[0] as Record<string, unknown>;
    return new Enrolled(row.id as number, row.full_name as string, row.email as string);
  }

  async update(
    id: number,
    updateEnrolledDto: UpdateEnrolledDto,
  ): Promise<Enrolled> {
    // TODO: Write SQL query to update enrolled
    // Only update fields that are provided in updateEnrolledDto
    const query = `-- TODO: UPDATE enrolled SET ... WHERE id = $? RETURNING *`;
    const result = await this.databaseService.query(query);
    const row = result.rows[0] as Record<string, unknown>;
    return new Enrolled(row.id as number, row.full_name as string, row.email as string);
  }

  async remove(id: number): Promise<void> {
    // TODO: Write SQL query to delete enrolled
    const query = `-- TODO: DELETE FROM enrolled WHERE id = $1`;
    const values = [id];
    await this.databaseService.query(query, values);
  }
}
