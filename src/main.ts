import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as morgan from 'morgan';
import { CORS } from './constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  // console.log(process.env.PORT);

  app.use(morgan('dev'));
  app.enableCors(CORS);
  app.setGlobalPrefix('api');

  await app.listen(configService.get('PORT') || 3000);
  console.log(`Server running on -----> ${await app.getUrl()}`);
}
bootstrap();
