import { TCPConfig } from 'geteventstore-promise'
import { Injectable } from '@nestjs/common'
import { config } from '@server/config'

@Injectable()
export class EventStoreConfiguration {
  get config(): TCPConfig {
    return {
      hostname: config.event_store.host,
      port: config.event_store.tcp_port,
      credentials: {
        username: config.event_store.username,
        password: config.event_store.password,
      }
    }
  }
}
