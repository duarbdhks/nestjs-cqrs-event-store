import { AggregateRoot } from '@nestjs/cqrs';
import { BOOLEAN } from '@shared/enum';
export declare class UserEntity extends AggregateRoot {
    user_id: number;
    name: string;
    nick_name?: string;
    status: BOOLEAN;
    created_at: Date;
    updated_at?: Date;
    onUserCreated(): void;
}
