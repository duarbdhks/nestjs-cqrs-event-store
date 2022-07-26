import { Module } from '@nestjs/common'
import { config } from '@server/config'
import { AccountModule } from '@server/modules/account/account.module'
import { SharedModule } from './shared.module'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: config.db.connectionString,
      entities: [`${__dirname}/**/entity/**/*.entity{.ts,.js}`],
      synchronize: false,
      logging: ['error'],
      extra: { max: config.db.max },
      keepConnectionAlive: true,
    }),
    AccountModule,
    SharedModule,
  ],
})
export class AppModule {
}
