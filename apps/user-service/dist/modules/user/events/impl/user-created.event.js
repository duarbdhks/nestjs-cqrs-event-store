"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreatedEvent = void 0;
const event_1 = require("../../../../common/event-store/event");
class UserCreatedEvent extends event_1.Event {
    constructor(user) {
        console.log('[UserCreatedEvent]', user);
        super(`user-${user.user_id}`, 'UserCreated', user);
        this.user = user;
    }
}
exports.UserCreatedEvent = UserCreatedEvent;
//# sourceMappingURL=user-created.event.js.map