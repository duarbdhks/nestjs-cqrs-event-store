import { Injectable } from '@nestjs/common'
import { ofType, Saga } from '@nestjs/cqrs'
import { UserCreatedEvent } from '@server/modules/user/events/impl'
import { UserDTO } from '@shared/dto'
import { map, Observable } from 'rxjs'

@Injectable()
export class UserSaga {
  // @Saga()
  // userCreated = (events$: Observable<UserDTO>) => {
  //   return events$.pipe(
  //     ofType(UserCreatedEvent),
  //     map((event) => {
  //       console.log(`[user Created Saga]`, event)
  //       return null
  //     })
  //   )
  // }
}
