import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { config } from '@server/config'
import { UserModule } from '@server/modules/user/user.module'
import { SharedModule } from './shared.module'

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
    UserModule,
    SharedModule,
  ],
})
export class AppModule {
}
