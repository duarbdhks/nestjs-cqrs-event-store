import { Event } from '@common/event-store/event'
import { AccountDTO } from '@shared/dto'

export class AccountCreatedEvent extends Event {
  constructor(public readonly account: AccountDTO) {
    super(`account-${account.account_id}`, 'AccountCreated', account)
  }
}
