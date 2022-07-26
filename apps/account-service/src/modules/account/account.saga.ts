import { Injectable } from '@nestjs/common'
import { ICommand, ofType, Saga } from '@nestjs/cqrs'
import { CreateAccountCommand } from '@server/modules/account/commands/impl'
import { UserCreatedEvent } from '@server/modules/account/events/impl'
import { UserDTO } from '@shared/dto'
import { map, Observable } from 'rxjs'

@Injectable()
export class AccountSaga {
  @Saga()
  userCreated = (events$: Observable<UserDTO>): Observable<ICommand> => {
    return events$.pipe(
      ofType(UserCreatedEvent),
      map((event) => {
        console.log(`[User Created Saga]`, event)
        return new CreateAccountCommand({ user_id: event.user.user_id, name: '염규완' })
      })
    )
  }
}
