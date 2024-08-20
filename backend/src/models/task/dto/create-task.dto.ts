import {
  IsString,
  IsOptional,
  IsDate,
  IsNotEmpty,
  IsInt,
  MinLength,
  MaxLength,
} from 'class-validator';
import { Type } from 'class-transformer/types/decorators';

export class CreateTaskDto {
  @IsInt()
  @IsNotEmpty()
  readonly userId: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(100)
  readonly title: string;

  @IsString()
  @IsOptional()
  @MaxLength(500)
  readonly description?: string;

  @IsDate()
  @Type(() => Date)
  readonly dueDate: Date;
}