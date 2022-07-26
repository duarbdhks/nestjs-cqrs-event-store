"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_exception_filter_1 = require("./common/filter/http-exception.filter");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const config_1 = require("./config");
const logger_service_1 = require("./shared/service/logger.service");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const loggerService = app.get(logger_service_1.LoggerService);
    const reflector = app.get(core_1.Reflector);
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter(loggerService));
    app.useGlobalInterceptors(new common_1.ClassSerializerInterceptor(reflector));
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
        validationError: { target: false },
    }));
    await app.listen(config_1.config.port, config_1.config.host);
    loggerService.warn(`[Account Service] server running on port ${config_1.config.host}:${config_1.config.port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map