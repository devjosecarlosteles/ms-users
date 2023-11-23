import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class PubSubService {
  constructor(
    @Inject('REDIS_CLIENT') private client: ClientProxy,
    private config: ConfigService,
  ) {}

  async get<T>(channel: string, value: object, service = ''): Promise<T> {
    return await this.client
      .send({ cmd: this.getChannel(channel, service) }, value)
      .toPromise();
  }

  async set(key: string, value: any): Promise<any> {
    const setValue = await this.client.send('set', [key, value]).toPromise();
    return setValue;
  }

  async publish(channel: string, value: object, service = '') {
    await this.client.emit(this.getChannel(channel, service), value);
  }

  private getChannel(channel: string, service: string): string {
    return (service ?? this.config.get('API_TAG')) + '-' + channel;
  }
}
