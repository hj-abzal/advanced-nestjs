import { ApiProperty } from "@nestjs/swagger";

export class BanUserDto {
  @ApiProperty({ example: "123", description: "Id of user for ban" })
  readonly userId: number;

  @ApiProperty({ example: "Spam", description: "Reason user is banned for" })
  readonly banReason: string;
}