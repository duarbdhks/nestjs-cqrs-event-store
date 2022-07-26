import { CommandHandler, EventBus, EventPublisher, ICommandHandler } from '@nestjs/cqrs'
import { CreateUserCommand } from '@server/modules/user/commands/impl'
import { UserCreatedEvent } from '@server/modules/user/events/impl/user-created.event'
import { UserRepository } from '@server/modules/user/user.repository'
import { UserDTO } from '@shared/dto'
import { plainToInstance } from 'class-transformer'

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly publisher: EventPublisher,
    private readonly eventBus: EventBus,
  ) {}

  async execute(command: CreateUserCommand): Promise<UserDTO> {
    console.log(`[${this.constructor.name}]`, command.options)

    const { options } = command

    const user = this.publisher.mergeObjectContext(
      await this.userRepository.createUser(options)
    )
    user.commit()

    return plainToInstance(UserDTO, user)
  }
}
