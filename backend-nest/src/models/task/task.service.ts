import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Task } from "./task.model";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";

@Injectable()
export class TaskService {
  constructor(@InjectModel(Task) private readonly taskModel: typeof Task) { }

  async createTask(task: CreateTaskDto): Promise<Task> {
    return this.taskModel.create(task)
  }

  async updateTask(id: number, updateTaskDto: UpdateTaskDto): Promise<Task | null> {
    return null;
  }

  async deleteTask(id: number): Promise<void> {

  }

  // TODO modify
  async getTasksByUserId(userId: number): Promise<Task[]> {
    return this.taskModel.findAll();
  }
}
