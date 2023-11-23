import { Module, ValidationPipe } from '@nestjs/common';
import { featureModules } from './modules';
import { globalModules } from './modules/global';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [...globalModules, ...featureModules],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
