import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersRepository } from './repositories/users.repository';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
})
export class UsersModule {}
