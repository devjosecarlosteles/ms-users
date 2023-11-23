import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'user email',
    example: 'email@email.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'username',
    example: 'josé',
  })
  @IsString()
  name: string;
}
