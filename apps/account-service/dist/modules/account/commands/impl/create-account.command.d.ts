import { ICommand } from "@nestjs/cqrs";
import { CreateAccountDTO } from '@server/modules/account/dto';
export declare class CreateAccountCommand implements ICommand {
    readonly options: CreateAccountDTO;
    constructor(options: CreateAccountDTO);
}
