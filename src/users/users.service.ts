import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./users.model";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRepository: typeof User
  ) {
  }

  async createUser(dto: CreateUserDto) {
    return this.userRepository.create(dto);
  }

  async getAllUsers() {
    return this.userRepository.findAll();
  }
}
