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
exports.EventStorePublisher = void 0;
const common_1 = require("@nestjs/common");
const event_store_1 = require("./event-store");
const event_utils_1 = require("./event-utils");
let EventStorePublisher = class EventStorePublisher {
    constructor(eventStore) {
        this.eventStore = eventStore;
        this.eventStore.connect();
    }
    async publish(event) {
        if ((0, event_utils_1.isValidEvent)(event)) {
            await this.eventStore.createEvent(event);
        }
        else {
            common_1.Logger.warn(`Invalid event: ${JSON.stringify(event)}`);
        }
    }
};
EventStorePublisher = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [event_store_1.EventStore])
], EventStorePublisher);
exports.EventStorePublisher = EventStorePublisher;
//# sourceMappingURL=event-store.publisher.js.map