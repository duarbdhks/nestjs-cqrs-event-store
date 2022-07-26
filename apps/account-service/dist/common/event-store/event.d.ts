import { IEvent } from '@nestjs/cqrs';
export declare abstract class Event implements IEvent {
    readonly streamId: string;
    readonly eventType: string;
    readonly data: object;
    readonly metadata: object;
    protected constructor(streamId: string, eventType: string, data?: object, metadata?: object);
}
