import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TasksService} from './tasks.service';
import {  CreateTaskDto} from './dto/task.dto';

@Controller('tasks')
export class TasksController {

    constructor(private taskservice: TasksService) {}

    @Get()
    getAllTasks(){
        return this.taskservice.getAllTasks()
    }

    @Post()
    createTask(@Body() newTask: CreateTaskDto) {
       return this.taskservice.createTasks(newTask.title, newTask.description)
        
    }

    @Delete(':id')
    deleteTask(@Param('id') id: string){
        this.taskservice.deleteTasks(id)
    }

    @Patch(':id')
    updateTask(@Param('id') id: string, @Body() updateFields: any){
        return this.taskservice.updateTasks(id, updateFields)
    }
}
