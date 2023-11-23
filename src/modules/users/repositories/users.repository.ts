import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { PrismaService } from 'src/modules/global/prisma/prisma.service';

@Injectable()
export class UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(user: CreateUserDto) {
    const formatUser = {
      email: user.email,
      name: user.name,
    };

    const userCreated = await this.prismaService.users.create({
      data: formatUser,
    });

    return {
      name: userCreated.name,
      id: userCreated.id,
      email: userCreated.email,
    };
  }

  async findAll() {
    return await this.prismaService.users.findMany();
  }

  async updateUserById(id: string, data: UpdateUserDto) {
    const user = await this.prismaService.users.update({
      where: {
        id,
      },
      data,
    });

    return user;
  }

  async deleteUserById(id: string) {
    return await this.prismaService.users.delete({ where: { id } });
  }
}
