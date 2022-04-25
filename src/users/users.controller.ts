import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { User } from "./users.model";
import { RolesGuard } from "../auth/roles.guard";
import { Roles } from "../auth/roles-auth.decorator";
import { AddRoleDto } from "./dto/add-role.dto";
import { BanUserDto } from "./dto/ban-user.dto";

@ApiTags("Users")
@Controller("users")
export class UsersController {
  constructor(private userService: UsersService) {
  }

  @ApiOperation({ summary: "Create user" })
  @ApiResponse({ status: 200, type: User })
  @Post()
  createUser(@Body() userDto: CreateUserDto) {
    return this.userService.createUser(userDto);
  }

  @ApiOperation({ summary: "Get all users" })
  @ApiResponse({ status: 200, type: [User] })
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @ApiOperation({ summary: "Add role" })
  @ApiResponse({ status: 200 })
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Post("/roles")
  addRole(@Body() dto: AddRoleDto) {
    return this.userService.addRole(dto);
  }

  @ApiOperation({ summary: "Ban for user" })
  @ApiResponse({ status: 200 })
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Post("/ban")
  banUser(@Body() dto: BanUserDto) {
    return this.userService.banUser(dto);
  }
}
