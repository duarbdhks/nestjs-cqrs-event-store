import { AggregateRoot } from '@nestjs/cqrs'
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('service_account')
export class AccountEntity extends AggregateRoot {
  @PrimaryGeneratedColumn({ type: 'int4' })
  account_id: number

  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string

  @Column({ type: 'integer', default: 0, nullable: false })
  balance: number

  @Column({ type: 'integer', nullable: false })
  user_id: number

  @CreateDateColumn({ type: 'timestamptz', nullable: false, default: () => 'NOW()' })
  created_at: Date

  @UpdateDateColumn({ type: 'timestamptz' })
  updated_at?: Date
}
