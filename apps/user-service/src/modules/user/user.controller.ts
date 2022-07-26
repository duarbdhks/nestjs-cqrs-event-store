import { Body, Controller, Post } from '@nestjs/common'
import { CreateUserDTO } from '@server/modules/user/dto'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Post('/')
  createUser(
    @Body() body: CreateUserDTO,
  ): Promise<void> {
    return this.userService.createUser({...body})
  }
}
