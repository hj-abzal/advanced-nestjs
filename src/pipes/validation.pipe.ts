import { ArgumentMetadata, PipeTransform } from "@nestjs/common";
import { validate } from "class-validator";
import { plainToClass } from "class-transformer";
import { ValidationExeption } from "../exeptions/validation.exeption";

export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
    const errors = await validate(plainToClass(metadata.metatype, value));
    if (errors.length) {
      let message = errors.map(err => {
        return `${err.property} - ${Object.values(err.constraints).join(", ")}`;
      });
      throw new ValidationExeption(message);
    }
    return value;
  }
}