import { IsString, IsNotEmpty, isString } from 'class-validator';

export class CreateActivityDto {
    @IsString()
    @IsNotEmpty()
    name: string;
}