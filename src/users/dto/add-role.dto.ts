import { ApiProperty } from "@nestjs/swagger";

export class AddRoleDto {
  @ApiProperty({ example: "ADMIN", description: "Role for user" })
  readonly value: string;

  @ApiProperty({ example: "12", description: "UserId for this role" })
  readonly userId: number;
}