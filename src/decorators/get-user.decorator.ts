// get-user.decorator.ts
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

// Custom decorator to extract user from the request
export const GetUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;  // Assumes that user is added to the request object by the JWT auth guard
  },
);
