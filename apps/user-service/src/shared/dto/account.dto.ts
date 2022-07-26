import { Exclude, Expose } from 'class-transformer'

@Exclude()
export class AccountDTO {
  @Expose()
  account_id: number

  @Expose()
  name: string

  @Expose()
  balance: number

  @Expose()
  user_id: number

  @Expose()
  created_at: Date

  @Expose()
  updated_at?: Date
}
