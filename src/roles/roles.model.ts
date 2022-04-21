import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { UserRoles } from "./user-roles.model";
import { User } from "../users/users.model";

interface RoleCreationAttrs {
  value: string,
  description: string
}

@Table({ tableName: "roles" })
export class Role extends Model<Role, RoleCreationAttrs> {
  @ApiProperty({ example: 1, description: "id of user" })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: "Admin", description: "Unic value" })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  value: number;

  @ApiProperty({ example: "Administration", description: "Desc of role" })
  @Column({ type: DataType.STRING, allowNull: false })
  description: string;


  @BelongsToMany(() => User, () => UserRoles)
  users: User[];
}