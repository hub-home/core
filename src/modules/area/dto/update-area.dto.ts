import { IsString, IsDefined } from 'class-validator';

export class UpdateAreaDto {
  @IsString()
  @IsDefined()
  name: string;
}
