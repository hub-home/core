import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/modules/app/app.module';
import { ConfigService } from '@nestjs/config';
import { HttpExceptionFilter } from '@/filters/http-exception.filter';
import { ResponseInterceptor } from '@/filters/response.interceptor';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Logger } from '@/utils/logger';

async function bootstrap() {
  const logger = new Logger('server');

  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger,
  });

  const config = app.get<ConfigService>(ConfigService);

  app.enableCors();
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new ResponseInterceptor());

  app.setGlobalPrefix(config.get('http.prefix'));
  await app.listen(config.get('http.port'));
}
bootstrap();
