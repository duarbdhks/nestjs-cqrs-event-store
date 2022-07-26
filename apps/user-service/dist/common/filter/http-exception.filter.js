"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const logger_service_1 = require("../../shared/service/logger.service");
let HttpExceptionFilter = class HttpExceptionFilter {
    constructor(loggerService) {
        this.loggerService = loggerService;
    }
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        if (request) {
            const status = exception.getStatus
                ? exception.getStatus()
                : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
            const errorResponse = {
                code: status,
                timestamp: new Date().toISOString(),
                path: request.url,
                method: request.method,
                error: status !== common_1.HttpStatus.INTERNAL_SERVER_ERROR
                    ? exception.message || null
                    : 'Internal server error',
                message: typeof exception.getResponse() === 'object'
                    ? exception.getResponse().message
                    : exception.getResponse(),
            };
            if (status === common_1.HttpStatus.INTERNAL_SERVER_ERROR) {
                this.loggerService.error(`${request.method} ${request.url}`, exception.stack, 'ExceptionFilter');
            }
            return response.status(status).json(errorResponse);
        }
        else {
            return exception;
        }
    }
};
HttpExceptionFilter = __decorate([
    (0, common_1.Catch)(common_1.HttpException),
    __metadata("design:paramtypes", [logger_service_1.LoggerService])
], HttpExceptionFilter);
exports.HttpExceptionFilter = HttpExceptionFilter;
//# sourceMappingURL=http-exception.filter.js.map