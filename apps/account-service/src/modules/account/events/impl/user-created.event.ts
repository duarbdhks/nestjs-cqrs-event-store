import { UserDTO } from '@shared/dto'
import { Event } from '@common/event-store/event'

export class UserCreatedEvent extends Event {
  constructor(public readonly user: UserDTO) {
    console.log('[UserCreatedEvent]', user)
    super(`user-${user.user_id}`, 'UserCreated', user)
  }
}
