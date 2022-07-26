import { IsDefined, IsOptional } from 'class-validator'

export class CreateUserDTO {
  @IsDefined()
  name: string

  @IsOptional()
  nick_name?: string
}
