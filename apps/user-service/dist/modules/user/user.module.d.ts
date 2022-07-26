import { EventStorePublisher } from '@common/event-store/event-store.publisher';
import { OnModuleInit } from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';
export declare class UserModule implements OnModuleInit {
    private readonly eventBus;
    private readonly eventStore;
    constructor(eventBus: EventBus, eventStore: EventStorePublisher);
    onModuleInit(): void;
}
