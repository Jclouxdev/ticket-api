import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventModule } from './event/event.module';
import { DatabaseModule } from './database/database.module';
import { EnrolledModule } from './enrolled/enrolled.module';
import { TicketModule } from './ticket/ticket.module';

@Module({
  imports: [DatabaseModule, EventModule, EnrolledModule, TicketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
