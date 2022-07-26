"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
class Event {
    constructor(streamId, eventType, data = {}, metadata = {}) {
        this.streamId = streamId;
        this.eventType = eventType;
        this.data = data;
        this.metadata = metadata;
    }
}
exports.Event = Event;
//# sourceMappingURL=event.js.map