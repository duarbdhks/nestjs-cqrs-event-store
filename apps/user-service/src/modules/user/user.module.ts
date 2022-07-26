import { EventStoreModule } from '@common/event-store/event-store.module'
import { EventStorePublisher } from '@common/event-store/event-store.publisher'
import { TypeOrmExModule } from '@common/typeorm-ex/typeorm-ex.module'
import { Module, OnModuleInit } from '@nestjs/common'
import { CqrsModule, EventBus } from '@nestjs/cqrs'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserCommandHandlers } from '@server/modules/user/commands/handlers'
import { UserController } from '@server/modules/user/user.controller'
import { UserRepository } from '@server/modules/user/user.repository'
import { UserSaga } from '@server/modules/user/user.saga'
import { UserService } from '@server/modules/user/user.service'
import { UserEntity } from '@shared/entity/user.entity'

@Module({
  imports: [
    CqrsModule,
    TypeOrmModule.forFeature([UserEntity]),
    TypeOrmExModule.forCustomRepository([UserRepository]),
    EventStoreModule,
  ],
  controllers: [UserController],
  providers: [
    UserService,
    ...UserCommandHandlers,
    UserSaga,
  ],
})
export class UserModule implements OnModuleInit {
  constructor(
    private readonly eventBus: EventBus,
    private readonly eventStore: EventStorePublisher
  ) {}

  onModuleInit(): void {
    this.eventBus.publisher = this.eventStore
  }
}
