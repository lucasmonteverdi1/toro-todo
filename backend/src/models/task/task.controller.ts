import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {TaskService} from "./task.service";
import {CreateTaskDto} from "./dto/create-task.dto";
import {Task} from "./task.model";
import {UpdateTaskDto} from "./dto/update-task.dto";

@Controller('api/tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post('/create')
  async createTask(@Body() createTaskDto: CreateTaskDto) : Promise<Task> {
    return await this.taskService.createTask(createTaskDto);
  }

  @Post('/update/:id')
  async updateTask(@Param('id') id: number, @Body() updateTaskDto: UpdateTaskDto) : Promise<Task> {
    const task = await this.taskService.updateTask(id, updateTaskDto);
    return task ? task : null;
  }

  @Delete('/delete/:id')
  async deleteTask(@Param('id') id: number) : Promise<void> {
    await this.taskService.deleteTask(id)
  }

}
