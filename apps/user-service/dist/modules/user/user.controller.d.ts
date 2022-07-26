import { CreateUserDTO } from '@server/modules/user/dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(body: CreateUserDTO): Promise<void>;
}
