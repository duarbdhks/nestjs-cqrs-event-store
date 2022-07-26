import { Logger } from '@nestjs/common';
export declare class LoggerService extends Logger {
    private readonly logger;
    constructor();
    log(message: string): void;
    info(message: string): void;
    debug(message: string): void;
    error(message: string, trace?: any, context?: string): void;
    warn(message: string): void;
}
