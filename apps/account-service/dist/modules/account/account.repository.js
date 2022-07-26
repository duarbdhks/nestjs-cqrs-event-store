"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountRepository = void 0;
const typeorm_ex_decorator_1 = require("../../common/typeorm-ex/typeorm-ex.decorator");
const account_entity_1 = require("../../shared/entity/account.entity");
const typeorm_1 = require("typeorm");
let AccountRepository = class AccountRepository extends typeorm_1.Repository {
    async createAccount(options) {
        const accountEntity = this.create(Object.assign({}, options));
        return this.save(accountEntity);
    }
};
AccountRepository = __decorate([
    (0, typeorm_ex_decorator_1.CustomRepository)(account_entity_1.AccountEntity)
], AccountRepository);
exports.AccountRepository = AccountRepository;
//# sourceMappingURL=account.repository.js.map