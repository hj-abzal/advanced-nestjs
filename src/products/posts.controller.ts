import { Body, Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";
import { PostsService } from "./posts.service";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("products")
export class PostsController {

  constructor(
    private postService: PostsService
  ) {
  }

  @Post()
  @UseInterceptors(FileInterceptor("image"))
  createPosts(@Body() dto: CreatePostDto, @UploadedFile() image: any) {
    return this.postService.create(dto, image);
  }
}
