import { IsString, IsIn } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  @IsIn(['pending', 'in progress', 'done'])
  status: string;
}
