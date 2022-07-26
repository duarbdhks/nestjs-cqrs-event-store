import { BOOLEAN } from '@shared/enum'
import { Exclude, Expose } from 'class-transformer'

@Exclude()
export class UserDTO {
  @Expose()
  user_id: number

  @Expose()
  name: string

  @Expose()
  nick_name?: string

  @Expose()
  status: BOOLEAN

  @Expose()
  created_at: Date

  @Expose()
  updated_at?: Date
}
