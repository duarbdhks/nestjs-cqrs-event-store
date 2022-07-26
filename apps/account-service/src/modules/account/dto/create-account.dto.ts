import { IsDefined } from 'class-validator'

export class CreateAccountDTO {
  @IsDefined()
  name: string

  @IsDefined()
  user_id: number
}
