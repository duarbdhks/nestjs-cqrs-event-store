import { AggregateRoot } from '@nestjs/cqrs'
import { UserCreatedEvent } from '@server/modules/user/events/impl'
import { UserDTO } from '@shared/dto'
import { BOOLEAN } from '@shared/enum'
import { plainToInstance } from 'class-transformer'
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('service_user')
export class UserEntity extends AggregateRoot {
  @PrimaryGeneratedColumn({ type: 'int4' })
  user_id: number

  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string

  @Column({ type: 'varchar', length: 255, nullable: true })
  nick_name?: string

  @Column({ type: 'char', nullable: false, length: 1, enum: BOOLEAN, default: BOOLEAN.YES })
  status: BOOLEAN

  @CreateDateColumn({ type: 'timestamptz', nullable: false, default: () => 'NOW()' })
  created_at: Date

  @UpdateDateColumn({ type: 'timestamptz' })
  updated_at?: Date

  onUserCreated() {
    this.apply(new UserCreatedEvent(plainToInstance(UserDTO, this)))
  }
}
