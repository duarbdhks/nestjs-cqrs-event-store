import { IEvent } from '@nestjs/cqrs'
import { AccountDTO } from '@shared/dto'

export class AccountCreatedEvent implements IEvent {
  constructor(public readonly account: AccountDTO) {}
}
