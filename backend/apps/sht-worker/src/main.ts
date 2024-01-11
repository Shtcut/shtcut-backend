import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from 'morgan';
import { LoggingInterceptor, ResponseFilter, ValidationPipe, WorkerExceptionFilter } from 'shtcut/core';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
    // logger: process.env.NODE_ENV === 'development' ? ['debug'] : ['error', 'warn', 'debug'],
  });

  const config = app.get(ConfigService);
  const apiVersions = config.get('app.api.versions') as string[];
  const currentVersion = apiVersions.pop();

  app.use(morgan('tiny'));
  app.setGlobalPrefix(`api/${currentVersion}`);
  app.useGlobalFilters(new WorkerExceptionFilter());
  app.useGlobalFilters(new ResponseFilter());
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new LoggingInterceptor());

  await app.listen(config.get('app.port'), () =>
    Logger.log(`${config.get('app.serviceName')} Running 👍: ` + `${config.get('app.baseUrl')}`),
  );
}

bootstrap();