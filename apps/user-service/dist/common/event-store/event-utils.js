"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidEvent = void 0;
function isValidEvent(value) {
    return (value.hasOwnProperty('streamId') &&
        value.hasOwnProperty('eventType') &&
        value.hasOwnProperty('data') &&
        value.hasOwnProperty('metadata'));
}
exports.isValidEvent = isValidEvent;
//# sourceMappingURL=event-utils.js.map