import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class Register {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @MinLength(8)
  @MaxLength(20)
  @IsNotEmpty()
  password: string;
}
