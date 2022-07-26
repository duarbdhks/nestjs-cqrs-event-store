import { CustomRepository } from '@common/typeorm-ex/typeorm-ex.decorator'
import { CreateUserDTO } from '@server/modules/user/dto'
import { UserEntity } from '@shared/entity/user.entity'
import { Repository } from 'typeorm'

@CustomRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  async createUser(options: CreateUserDTO): Promise<UserEntity> {
    const userEntity = this.create({ ...options })
    const user = await this.save(userEntity)
    user.onUserCreated()

    return user
  }
}
