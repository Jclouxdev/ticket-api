import { Module } from '@nestjs/common';
import { EnrolledService } from './enrolled.service';
import { EnrolledController } from './enrolled.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [EnrolledController],
  providers: [EnrolledService],
})
export class EnrolledModule {}
