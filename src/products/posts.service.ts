import { Injectable } from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Posts } from "./posts.model";
import { FilesService } from "../files/files.service";

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Posts) private postRepository: typeof Posts,
    private filesService: FilesService
  ) {
  }

  async create(dto: CreatePostDto, image: any) {
    const fileName = await this.filesService.createFile(image);
    return this.postRepository.create({ ...dto, image: fileName });
  }
}
