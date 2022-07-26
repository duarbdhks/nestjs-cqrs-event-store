import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs'
import { AccountRepository } from '@server/modules/account/account.repository'
import { CreateAccountCommand } from '@server/modules/account/commands/impl'
import { AccountCreatedEvent } from '@server/modules/account/events/impl'
import { AccountDTO } from '@shared/dto'
import { plainToInstance } from 'class-transformer'

@CommandHandler(CreateAccountCommand)
export class CreateAccountHandler implements ICommandHandler<CreateAccountCommand> {
  constructor(
    private readonly accountRepository: AccountRepository,
    private readonly eventBus: EventBus,
  ) {}

  async execute(command: CreateAccountCommand): Promise<AccountDTO> {
    console.log('[CreateAccountHandler]', command)
    const { options } = command
    const account = await this.accountRepository.createAccount(options)

    this.eventBus.publish(new AccountCreatedEvent(plainToInstance(AccountDTO, account)))
    account.commit()

    return plainToInstance(AccountDTO, account)
  }
}
