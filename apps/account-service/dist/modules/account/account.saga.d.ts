import { ICommand } from '@nestjs/cqrs';
import { UserDTO } from '@shared/dto';
import { Observable } from 'rxjs';
export declare class AccountSaga {
    userCreated: (events$: Observable<UserDTO>) => Observable<ICommand>;
}
