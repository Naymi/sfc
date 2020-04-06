import {
  Table,
  Column,
  Model,
  HasMany,
  Default,
  Unique,
} from "sequelize-typescript"
import Post from "./Post.model"
@Table
export default class User extends Model<User> {
  @Unique
  @Column
  login!: string

  @Default("Unkown user")
  @Column
  name!: string

  @Column
  pass!: string

  @HasMany(() => Post)
  posts!: Post[]
}
