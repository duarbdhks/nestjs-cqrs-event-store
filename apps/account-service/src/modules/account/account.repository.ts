import { CustomRepository } from '@common/typeorm-ex/typeorm-ex.decorator'
import { CreateAccountDTO } from '@server/modules/account/dto'
import { AccountEntity } from '@shared/entity/account.entity'
import { Repository } from 'typeorm'

@CustomRepository(AccountEntity)
export class AccountRepository extends Repository<AccountEntity> {
  async createAccount(options: CreateAccountDTO): Promise<AccountEntity> {
    const accountEntity = this.create({ ...options })
    return this.save(accountEntity)
  }
}
