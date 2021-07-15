import { IsString, IsDefined, IsBoolean } from 'class-validator';

export class CreateMemberDto {
  @IsString()
  @IsDefined()
  name: string;

  @IsString()
  @IsDefined()
  username: string;

  @IsString()
  @IsDefined()
  password: string;

  @IsBoolean()
  @IsDefined()
  admin: boolean;
}
