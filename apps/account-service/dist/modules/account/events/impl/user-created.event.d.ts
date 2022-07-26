import { UserDTO } from '@shared/dto';
import { Event } from '@common/event-store/event';
export declare class UserCreatedEvent extends Event {
    readonly user: UserDTO;
    constructor(user: UserDTO);
}
