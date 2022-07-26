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
exports.CreateUserHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const impl_1 = require("../impl");
const user_repository_1 = require("../../user.repository");
const dto_1 = require("../../../../shared/dto");
const class_transformer_1 = require("class-transformer");
let CreateUserHandler = class CreateUserHandler {
    constructor(userRepository, publisher, eventBus) {
        this.userRepository = userRepository;
        this.publisher = publisher;
        this.eventBus = eventBus;
    }
    async execute(command) {
        console.log(`[${this.constructor.name}]`, command.options);
        const { options } = command;
        const user = this.publisher.mergeObjectContext(await this.userRepository.createUser(options));
        user.commit();
        return (0, class_transformer_1.plainToInstance)(dto_1.UserDTO, user);
    }
};
CreateUserHandler = __decorate([
    (0, cqrs_1.CommandHandler)(impl_1.CreateUserCommand),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        cqrs_1.EventPublisher,
        cqrs_1.EventBus])
], CreateUserHandler);
exports.CreateUserHandler = CreateUserHandler;
//# sourceMappingURL=create-user.handler.js.map