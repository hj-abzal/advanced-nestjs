import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class AddRoleDto {
  @IsString({ message: "Should be string" })
  @ApiProperty({ example: "ADMIN", description: "Role for user" })
  readonly value: string;

  @IsNumber({}, { message: "Should be number" })
  @ApiProperty({ example: "12", description: "UserId for this role" })
  readonly userId: number;
}