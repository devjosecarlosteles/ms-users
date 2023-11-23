import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { addSwagger } from './app/config/swagger.config';
import { ValidationPipe } from '@nestjs/common';
import { addRedisClient } from './app/config/redis.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);

  const PORT = configService.get<number>('PORT');

  addSwagger(app);
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(PORT, () =>
    console.warn(`server running in localhost:${PORT}`),
  );

  await addRedisClient(configService);
}
bootstrap();
