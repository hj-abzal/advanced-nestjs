export class CreatePostDto {
  readonly title: string;
  readonly content: string;
  readonly createdAt: string;
  readonly description: string;
  readonly status: string;
  readonly userID: number;
}