import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new Error('Authorization token missing');
    }

    const token = authHeader.split(' ')[1]; // Bearer token

    try {
      const user = this.jwtService.verify(token);
      request.user = user; // attach user data to the request
      return true;
    } catch (error) {
      throw new Error('Invalid token');
    }
  }
}
