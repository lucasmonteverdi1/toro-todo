import { Table, Column, Model, AutoIncrement, DataType, PrimaryKey, HasMany } from 'sequelize-typescript';
import {Task} from "../task/task.model";

@Table
export class User extends Model<User> {

  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    allowNull: false})
  id: number;

  @Column({type: DataType.STRING, allowNull: false})
  email: string;

  @Column({type: DataType.STRING, allowNull: false})
  username: string;

  @Column({type: DataType.STRING, allowNull: false})
  password: string;

  @HasMany(() => Task, { onDelete: 'CASCADE' })
  tasks: Task[];
}