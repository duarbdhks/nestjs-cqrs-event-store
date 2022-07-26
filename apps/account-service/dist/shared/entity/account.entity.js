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
exports.AccountEntity = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const typeorm_1 = require("typeorm");
let AccountEntity = class AccountEntity extends cqrs_1.AggregateRoot {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int4' }),
    __metadata("design:type", Number)
], AccountEntity.prototype, "account_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: false }),
    __metadata("design:type", String)
], AccountEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer', default: 0, nullable: false }),
    __metadata("design:type", Number)
], AccountEntity.prototype, "balance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer', nullable: false }),
    __metadata("design:type", Number)
], AccountEntity.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamptz', nullable: false, default: () => 'NOW()' }),
    __metadata("design:type", Date)
], AccountEntity.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamptz' }),
    __metadata("design:type", Date)
], AccountEntity.prototype, "updated_at", void 0);
AccountEntity = __decorate([
    (0, typeorm_1.Entity)('service_account')
], AccountEntity);
exports.AccountEntity = AccountEntity;
//# sourceMappingURL=account.entity.js.map