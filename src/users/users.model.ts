import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

interface UserCreationAttrs {
  email: string,
  password: string
}

@Table({ tableName: "users" })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: 1, description: "id of user" })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: "email123@mail.ru", description: "email of user" })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: number;

  @ApiProperty({ example: "12345678", description: "password of user" })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @ApiProperty({ example: true, description: "banned or not" })
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  banned: boolean;

  @ApiProperty({ example: "spamming", description: "Reason of ban" })
  @Column({ type: DataType.STRING, allowNull: true })
  banReason: string;

}