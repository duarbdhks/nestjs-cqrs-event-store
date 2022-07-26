import { EventBus, ICommandHandler } from '@nestjs/cqrs';
import { AccountRepository } from '@server/modules/account/account.repository';
import { CreateAccountCommand } from '@server/modules/account/commands/impl';
import { AccountDTO } from '@shared/dto';
export declare class CreateAccountHandler implements ICommandHandler<CreateAccountCommand> {
    private readonly accountRepository;
    private readonly eventBus;
    constructor(accountRepository: AccountRepository, eventBus: EventBus);
    execute(command: CreateAccountCommand): Promise<AccountDTO>;
}
