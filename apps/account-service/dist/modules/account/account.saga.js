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
exports.AccountSaga = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const impl_1 = require("./commands/impl");
const impl_2 = require("./events/impl");
const rxjs_1 = require("rxjs");
let AccountSaga = class AccountSaga {
    constructor() {
        this.userCreated = (events$) => {
            return events$.pipe((0, cqrs_1.ofType)(impl_2.UserCreatedEvent), (0, rxjs_1.map)((event) => {
                console.log(`[User Created Saga]`, event);
                return new impl_1.CreateAccountCommand({ user_id: event.user.user_id, name: '염규완' });
            }));
        };
    }
};
__decorate([
    (0, cqrs_1.Saga)(),
    __metadata("design:type", Object)
], AccountSaga.prototype, "userCreated", void 0);
AccountSaga = __decorate([
    (0, common_1.Injectable)()
], AccountSaga);
exports.AccountSaga = AccountSaga;
//# sourceMappingURL=account.saga.js.map