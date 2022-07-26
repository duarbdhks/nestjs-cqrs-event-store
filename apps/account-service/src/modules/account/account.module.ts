import { EventStoreModule } from '@common/event-store/event-store.module'
import { EventStorePublisher } from '@common/event-store/event-store.publisher'
import { TypeOrmExModule } from '@common/typeorm-ex/typeorm-ex.module'
import { Module, OnModuleInit } from '@nestjs/common'
import { CqrsModule, EventBus } from '@nestjs/cqrs'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AccountController } from '@server/modules/account/account.controller'
import { AccountRepository } from '@server/modules/account/account.repository'
import { AccountSaga } from '@server/modules/account/account.saga'
import { AccountService } from '@server/modules/account/account.service'
import { AccountCommandHandlers } from '@server/modules/account/commands/handlers'
import { AccountEntity } from '@shared/entity/account.entity'

@Module({
  imports: [
    CqrsModule,
    TypeOrmModule.forFeature([AccountEntity]),
    TypeOrmExModule.forCustomRepository([AccountRepository]),
    EventStoreModule,
  ],
  controllers: [AccountController],
  providers: [
    AccountService,
    ...AccountCommandHandlers,
    AccountSaga,
  ],
})
export class AccountModule implements OnModuleInit {
  constructor(
    private readonly eventBus: EventBus,
    private readonly eventStore: EventStorePublisher,
  ) {}

  onModuleInit(): void {
    this.eventBus.publisher = this.eventStore
  }
}
