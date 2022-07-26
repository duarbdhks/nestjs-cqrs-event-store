import { AggregateRoot } from '@nestjs/cqrs';
export declare class AccountEntity extends AggregateRoot {
    account_id: number;
    name: string;
    balance: number;
    user_id: number;
    created_at: Date;
    updated_at?: Date;
}
