import { ICommand } from "@nestjs/cqrs";
import { CreateAccountDTO } from '@server/modules/account/dto'

export class CreateAccountCommand implements ICommand {
  constructor(public readonly options: CreateAccountDTO) {}
}
