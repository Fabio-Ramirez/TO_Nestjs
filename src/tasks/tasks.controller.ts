import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';


@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) { }

    @Get()
    findAll(): Promise<Task[]> {
        return this.tasksService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Task> {
        return this.tasksService.findOne(+id);
    }

    @Post()
    create(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
        console.log("task new: ", createTaskDto)
        const task: Task = {
            ...createTaskDto,
            id: undefined,  // Exclude the id as it will be generated
        };
        return this.tasksService.create(task);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateTaskDto: Partial<CreateTaskDto>): Promise<void> {
        return this.tasksService.update(+id, updateTaskDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.tasksService.remove(+id);
    }
}
