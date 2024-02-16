import { IsNotEmpty, IsEmail, IsString } from 'class-validator';

export class JoinUserDto {
  @IsNotEmpty()
  @IsEmail()
  userEmail: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
