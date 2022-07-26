"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventStoreModule = void 0;
const common_1 = require("@nestjs/common");
const event_store_1 = require("./event-store");
const event_store_publisher_1 = require("./event-store.publisher");
const event_store_configuration_1 = require("./event-store.configuration");
let EventStoreModule = class EventStoreModule {
};
EventStoreModule = __decorate([
    (0, common_1.Module)({
        providers: [event_store_1.EventStore, event_store_publisher_1.EventStorePublisher, event_store_configuration_1.EventStoreConfiguration],
        exports: [event_store_1.EventStore, event_store_publisher_1.EventStorePublisher]
    })
], EventStoreModule);
exports.EventStoreModule = EventStoreModule;
//# sourceMappingURL=event-store.module.js.map