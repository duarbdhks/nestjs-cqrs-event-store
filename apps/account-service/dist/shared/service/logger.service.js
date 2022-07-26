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
var LoggerService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("../../config");
const winston = require("winston");
const DailyRotateFile = require("winston-daily-rotate-file");
let LoggerService = LoggerService_1 = class LoggerService extends common_1.Logger {
    constructor() {
        super(LoggerService_1.name, { timestamp: true });
        this.logger = winston.createLogger({
            transports: [
                new DailyRotateFile({
                    level: 'debug',
                    filename: `./logs/${config_1.config.env}/debug-%DATE%.log`,
                    datePattern: 'YYYY-MM-DD',
                    zippedArchive: true,
                    maxSize: '20m',
                    maxFiles: '14d',
                    format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
                }),
                new DailyRotateFile({
                    level: 'error',
                    filename: `./logs/${config_1.config.env}/error-%DATE%.log`,
                    datePattern: 'YYYY-MM-DD',
                    zippedArchive: false,
                    maxSize: '20m',
                    maxFiles: '30d',
                    format: winston.format.combine(winston.format.timestamp(), winston.format.json())
                }),
                new winston.transports.Console({
                    level: 'debug',
                    handleExceptions: true,
                    format: winston.format.combine(winston.format.colorize(), winston.format.timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }), winston.format.simple())
                }),
            ],
            exitOnError: false,
        });
    }
    log(message) {
        this.logger.info(message);
    }
    info(message) {
        this.logger.info(message);
    }
    debug(message) {
        this.logger.debug(message);
    }
    error(message, trace, context) {
        this.logger.error(`${context} ${message} -> (${trace} || 'trace not provided!')`);
    }
    warn(message) {
        this.logger.warn(message);
    }
};
LoggerService = LoggerService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], LoggerService);
exports.LoggerService = LoggerService;
//# sourceMappingURL=logger.service.js.map