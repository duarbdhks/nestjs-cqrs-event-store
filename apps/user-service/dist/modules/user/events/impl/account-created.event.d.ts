import { IEvent } from '@nestjs/cqrs';
import { AccountDTO } from '@shared/dto';
export declare class AccountCreatedEvent implements IEvent {
    readonly account: AccountDTO;
    constructor(account: AccountDTO);
}
