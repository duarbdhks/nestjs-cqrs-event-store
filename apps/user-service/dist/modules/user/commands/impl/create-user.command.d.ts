import { ICommand } from '@nestjs/cqrs';
import { CreateUserDTO } from '@server/modules/user/dto';
export declare class CreateUserCommand implements ICommand {
    readonly options: CreateUserDTO;
    constructor(options: CreateUserDTO);
}
