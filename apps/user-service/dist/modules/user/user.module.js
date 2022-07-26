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
exports.UserModule = void 0;
const event_store_module_1 = require("../../common/event-store/event-store.module");
const event_store_publisher_1 = require("../../common/event-store/event-store.publisher");
const typeorm_ex_module_1 = require("../../common/typeorm-ex/typeorm-ex.module");
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const typeorm_1 = require("@nestjs/typeorm");
const handlers_1 = require("./commands/handlers");
const user_controller_1 = require("./user.controller");
const user_repository_1 = require("./user.repository");
const user_saga_1 = require("./user.saga");
const user_service_1 = require("./user.service");
const user_entity_1 = require("../../shared/entity/user.entity");
let UserModule = class UserModule {
    constructor(eventBus, eventStore) {
        this.eventBus = eventBus;
        this.eventStore = eventStore;
    }
    onModuleInit() {
        this.eventBus.publisher = this.eventStore;
    }
};
UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            cqrs_1.CqrsModule,
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.UserEntity]),
            typeorm_ex_module_1.TypeOrmExModule.forCustomRepository([user_repository_1.UserRepository]),
            event_store_module_1.EventStoreModule,
        ],
        controllers: [user_controller_1.UserController],
        providers: [
            user_service_1.UserService,
            ...handlers_1.UserCommandHandlers,
            user_saga_1.UserSaga,
        ],
    }),
    __metadata("design:paramtypes", [cqrs_1.EventBus,
        event_store_publisher_1.EventStorePublisher])
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map