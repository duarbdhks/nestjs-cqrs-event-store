import { CreateUserDTO } from '@server/modules/user/dto';
import { UserEntity } from '@shared/entity/user.entity';
import { Repository } from 'typeorm';
export declare class UserRepository extends Repository<UserEntity> {
    createUser(options: CreateUserDTO): Promise<UserEntity>;
}
