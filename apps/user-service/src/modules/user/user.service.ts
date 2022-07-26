import { Injectable } from '@nestjs/common'
import { CommandBus, QueryBus } from '@nestjs/cqrs'
import { CreateUserCommand } from '@server/modules/user/commands/impl'
import { CreateUserDTO } from '@server/modules/user/dto'

@Injectable()
export class UserService {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  createUser(options: CreateUserDTO): Promise<void> {
    return this.commandBus.execute(new CreateUserCommand(options))
  }
}
