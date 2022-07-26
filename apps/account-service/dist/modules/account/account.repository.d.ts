import { CreateAccountDTO } from '@server/modules/account/dto';
import { AccountEntity } from '@shared/entity/account.entity';
import { Repository } from 'typeorm';
export declare class AccountRepository extends Repository<AccountEntity> {
    createAccount(options: CreateAccountDTO): Promise<AccountEntity>;
}
