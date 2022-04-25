import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException
} from "@nestjs/common";
import { Observable } from "rxjs";
import { JwtService } from "@nestjs/jwt";
import { Reflector } from "@nestjs/core";
import { ROLES_KEY } from "./roles-auth.decorator";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private reflector: Reflector
  ) {
  }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
        context.getHandler(),
        context.getClass()
      ]);
      if (!requiredRoles) {
        return true;
      }
      const req = context.switchToHttp().getRequest();
      const [baerer, token] = req.headers.authorization.split(" ");

      if (baerer !== "Bearer" || !token) {
        throw new UnauthorizedException({ massage: "User not authorized!" });
      }
      const user = this.jwtService.verify(token);
      req.user = user;
      return user.roles.some(role => requiredRoles.includes(role.value));

    } catch (e) {
      console.log(e);
      throw new HttpException("No rights for this route", HttpStatus.FORBIDDEN);
    }
  }

}