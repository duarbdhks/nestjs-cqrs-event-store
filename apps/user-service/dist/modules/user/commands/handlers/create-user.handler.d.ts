import { EventBus, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from '@server/modules/user/commands/impl';
import { UserRepository } from '@server/modules/user/user.repository';
import { UserDTO } from '@shared/dto';
export declare class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
    private readonly userRepository;
    private readonly publisher;
    private readonly eventBus;
    constructor(userRepository: UserRepository, publisher: EventPublisher, eventBus: EventBus);
    execute(command: CreateUserCommand): Promise<UserDTO>;
}
