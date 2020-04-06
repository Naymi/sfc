import {
  Table,
  Column,
  Model,
  BelongsTo,
  ForeignKey,
  Default,
} from "sequelize-typescript"
import { DataTypes } from "sequelize"
import User from "./User.model"
@Table
export default class Post extends Model<Post> {
  @Column({ type: DataTypes.TEXT, allowNull: false })
  content!: string

  @Default("title")
  @Column
  title!: string

  @ForeignKey(() => User)
  @Column
  userId!: number

  @BelongsTo(() => User)
  user!: User
}
