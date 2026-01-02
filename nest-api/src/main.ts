import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api'); // so routes start with /api

  const server_port = 4000;
  await app.listen(server_port);
  console.log(`
    --------------------------------------------------------
      \t Server running on http://localhost:${server_port}/api
    --------------------------------------------------------
    `);
}
bootstrap();
