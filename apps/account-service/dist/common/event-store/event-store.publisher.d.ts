import { IEvent, IEventPublisher } from '@nestjs/cqrs';
import { EventStore } from './event-store';
export declare class EventStorePublisher implements IEventPublisher {
    private eventStore;
    constructor(eventStore: EventStore);
    publish<T extends IEvent>(event: T): Promise<void>;
}
