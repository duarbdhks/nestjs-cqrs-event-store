import { Body, Controller, Post } from '@nestjs/common'
import { AccountService } from './account.service'

@Controller('account')
export class AccountController {
  constructor(
    private readonly accountService: AccountService,
  ) {}

  // @Post('/')
  // createAccount(
  //   @Body() body,
  // ): Promise<void> {
  //   return this.accountService.createAccount({ ...body })
  // }
}
