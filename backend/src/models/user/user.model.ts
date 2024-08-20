import { Table, Column, Model, AutoIncrement, DataType, PrimaryKey, HasMany } from 'sequelize-typescript';
import {Task} from "../task/task.model";

@Table
export class User extends Model<User> {

  @Column(DataType.INTEGER)
  @PrimaryKey
  @AutoIncrement
  id: number;

  @Column({type: DataType.STRING, allowNull: false})
  username: string;

  @Column({type: DataType.STRING, allowNull: false})
  password: string;

  @HasMany(() => Task, { onDelete: 'CASCADE' })
  tasks: Task[];
}