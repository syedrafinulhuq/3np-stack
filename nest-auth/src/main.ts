import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api'); // so routes start with /api

  await app.listen(3000);
  console.log(`Server running on http://localhost:3000/api`);
}
bootstrap();
