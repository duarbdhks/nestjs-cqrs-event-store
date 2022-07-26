import { ArgumentsHost, ExceptionFilter, HttpException } from '@nestjs/common';
import { LoggerService } from '@shared/service/logger.service';
export declare class HttpExceptionFilter implements ExceptionFilter {
    private readonly loggerService;
    constructor(loggerService: LoggerService);
    catch(exception: HttpException, host: ArgumentsHost): any;
}
