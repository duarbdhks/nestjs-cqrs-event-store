import { Event } from '@common/event-store/event';
import { AccountDTO } from '@shared/dto';
export declare class AccountCreatedEvent extends Event {
    readonly account: AccountDTO;
    constructor(account: AccountDTO);
}
