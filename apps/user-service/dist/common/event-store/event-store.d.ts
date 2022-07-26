import { EventStoreConfiguration } from './event-store.configuration';
import { Event } from './event';
export declare class EventStore {
    private configuration;
    private client;
    constructor(configuration: EventStoreConfiguration);
    connect(): void;
    close(): Promise<void>;
    exists(streamName: string): Promise<boolean>;
    createEvent(event: Event): Promise<void>;
    getEvents(streamName: string): Promise<import("geteventstore-promise").Event[]>;
}
