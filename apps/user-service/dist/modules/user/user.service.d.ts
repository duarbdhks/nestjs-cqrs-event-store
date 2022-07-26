import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateUserDTO } from '@server/modules/user/dto';
export declare class UserService {
    private readonly queryBus;
    private readonly commandBus;
    constructor(queryBus: QueryBus, commandBus: CommandBus);
    createUser(options: CreateUserDTO): Promise<void>;
}
