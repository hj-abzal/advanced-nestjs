import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ example: "email@mail.ru", description: "Email for login" })
  readonly email: string;

  @ApiProperty({ example: "12345678", description: "Password of an account" })
  readonly password: string;
}