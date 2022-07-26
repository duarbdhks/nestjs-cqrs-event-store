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
exports.CreateAccountHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const account_repository_1 = require("../../account.repository");
const impl_1 = require("../impl");
const impl_2 = require("../../events/impl");
const dto_1 = require("../../../../shared/dto");
const class_transformer_1 = require("class-transformer");
let CreateAccountHandler = class CreateAccountHandler {
    constructor(accountRepository, eventBus) {
        this.accountRepository = accountRepository;
        this.eventBus = eventBus;
    }
    async execute(command) {
        console.log('[CreateAccountHandler]', command);
        const { options } = command;
        const account = await this.accountRepository.createAccount(options);
        this.eventBus.publish(new impl_2.AccountCreatedEvent((0, class_transformer_1.plainToInstance)(dto_1.AccountDTO, account)));
        account.commit();
        return (0, class_transformer_1.plainToInstance)(dto_1.AccountDTO, account);
    }
};
CreateAccountHandler = __decorate([
    (0, cqrs_1.CommandHandler)(impl_1.CreateAccountCommand),
    __metadata("design:paramtypes", [account_repository_1.AccountRepository,
        cqrs_1.EventBus])
], CreateAccountHandler);
exports.CreateAccountHandler = CreateAccountHandler;
//# sourceMappingURL=create-account.handler.js.map