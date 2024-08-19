import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsString()
  company: string;

  @IsString()
  role: string;

  @IsString()
  phone: string;
}
