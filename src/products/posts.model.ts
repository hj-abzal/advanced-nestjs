import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "../users/users.model";

interface PostsCreationAttrs {
  title: string;
  content: string;
  userID: number;
  image: string;
}

@Table({ tableName: "Posts" })
export class Posts extends Model<Posts, PostsCreationAttrs> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @Column({ type: DataType.STRING, allowNull: false })
  content: string;

  @Column({ type: DataType.STRING })
  image: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, unique: true })
  userID: number;

  @BelongsTo(() => User)
  author: User;
}