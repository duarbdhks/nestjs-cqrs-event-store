import { HttpExceptionFilter } from '@common/filter/http-exception.filter'
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common'
import { NestFactory, Reflector } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { config } from '@server/config'
import { LoggerService } from '@shared/service/logger.service'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)

  const loggerService = app.get(LoggerService)
  const reflector = app.get(Reflector)
  app.useGlobalFilters(new HttpExceptionFilter(loggerService))
  app.useGlobalInterceptors(new ClassSerializerInterceptor(reflector))
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      validationError: { target: false },
    }),
  )

  await app.listen(config.port, config.host)
  loggerService.warn(`[Account Service] server running on port ${config.host}:${config.port}`)
}

bootstrap()
