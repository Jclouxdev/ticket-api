import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Flash Ticket Sales API')
    .setDescription('REST API for flash ticket sales')
    .setVersion('1.0.0')
    .addTag('enrolled', 'User management')
    .addTag('event', 'Event management')
    .addTag('ticket', 'Ticket management')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
