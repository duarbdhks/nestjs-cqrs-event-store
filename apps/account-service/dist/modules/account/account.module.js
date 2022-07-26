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
exports.AccountModule = void 0;
const event_store_module_1 = require("../../common/event-store/event-store.module");
const event_store_publisher_1 = require("../../common/event-store/event-store.publisher");
const typeorm_ex_module_1 = require("../../common/typeorm-ex/typeorm-ex.module");
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const typeorm_1 = require("@nestjs/typeorm");
const account_controller_1 = require("./account.controller");
const account_repository_1 = require("./account.repository");
const account_saga_1 = require("./account.saga");
const account_service_1 = require("./account.service");
const handlers_1 = require("./commands/handlers");
const account_entity_1 = require("../../shared/entity/account.entity");
let AccountModule = class AccountModule {
    constructor(eventBus, eventStore) {
        this.eventBus = eventBus;
        this.eventStore = eventStore;
    }
    onModuleInit() {
        this.eventBus.publisher = this.eventStore;
    }
};
AccountModule = __decorate([
    (0, common_1.Module)({
        imports: [
            cqrs_1.CqrsModule,
            typeorm_1.TypeOrmModule.forFeature([account_entity_1.AccountEntity]),
            typeorm_ex_module_1.TypeOrmExModule.forCustomRepository([account_repository_1.AccountRepository]),
            event_store_module_1.EventStoreModule,
        ],
        controllers: [account_controller_1.AccountController],
        providers: [
            account_service_1.AccountService,
            ...handlers_1.AccountCommandHandlers,
            account_saga_1.AccountSaga,
        ],
    }),
    __metadata("design:paramtypes", [cqrs_1.EventBus,
        event_store_publisher_1.EventStorePublisher])
], AccountModule);
exports.AccountModule = AccountModule;
//# sourceMappingURL=account.module.js.map