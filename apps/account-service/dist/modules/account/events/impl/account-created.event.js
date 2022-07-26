"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountCreatedEvent = void 0;
const event_1 = require("../../../../common/event-store/event");
class AccountCreatedEvent extends event_1.Event {
    constructor(account) {
        super(`account-${account.account_id}`, 'AccountCreated', account);
        this.account = account;
    }
}
exports.AccountCreatedEvent = AccountCreatedEvent;
//# sourceMappingURL=account-created.event.js.map