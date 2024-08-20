import { Table, Column, Model, AutoIncrement, DataType, PrimaryKey, ForeignKey } from 'sequelize-typescript';
import {User} from "../user/user.model";

@Table
export class Task extends Model<Task> {

  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @Column({type: DataType.STRING, allowNull: false})
  title: string;

  @Column(DataType.TEXT)
  description: string;

  @Column({type: DataType.BOOLEAN, defaultValue: false})
  isCompleted: boolean;

  @Column(DataType.DATE)
  dueAt: Date;

  @Column({type: DataType.INTEGER, allowNull: false})
  @ForeignKey(() => User)
  userId: number;
}