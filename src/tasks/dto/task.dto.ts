import { TaskStatus } from "../tasks.entity";
import { IsIn, IsNotEmpty, IsOptional, IsString, MinLength} from 'class-validator';


export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    title: string;

    @IsString()
    description: string;
}

export class UpdateTaskDto {
    @IsString()
    @IsOptional()
    title?: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    @IsOptional()
    @IsIn([TaskStatus.PENDING, TaskStatus.IN_PROCESS, TaskStatus.DONE])
    status?: TaskStatus;
}