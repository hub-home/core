import { IsString, IsDefined } from 'class-validator';

export class CreateAreaDto {
  @IsString()
  @IsDefined()
  name: string;
}
