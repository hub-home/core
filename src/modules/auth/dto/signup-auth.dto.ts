import { IsString, IsDefined } from 'class-validator';

export class SignUpDto {
  @IsString()
  @IsDefined()
  username: string;

  @IsString()
  @IsDefined()
  password: string;
}
