import {
  ArgumentsHost,
  Catch,
  ConflictException,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { UniqueConstraintError } from 'sequelize'; // Ensure you import relevant errors

// A helper function to catch unique constraint errors
const catchUniqueFieldError = (exception: Error): HttpException | Error => {
  if (exception instanceof UniqueConstraintError) {
    const error = exception.errors?.[0];
    if (error) {
      const errorMsg = `${error.path} should be unique. Detail: ${error.path}: ${error.value} already exists`;
      return new ConflictException(errorMsg);
    }
  }
  return exception; // return the exception as is if not a unique constraint error
};

// A global exception filter for handling all errors
@Catch()
export class ExceptionHandlerFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();

    const requestTime = new Date().toISOString();
    
    // Catch and handle Sequelize Unique Constraint errors
    exception = catchUniqueFieldError(exception);

    // Log the exception details (useful for debugging)
    console.error(exception);

    // Handle HttpException (includes all NestJS built-in exceptions)
    if (exception instanceof HttpException) {
      return response.status(exception.getStatus()).json({
        message: exception.message,
        requestTime,
        url: request.url,
        errorName: exception.name,
        statusCode: exception.getStatus(),
      });
    }

    // Generic response for unexpected errors
    return response.status(500).json({
      message: exception?.message || 'Internal server error',
      requestTime,
      url: request.url,
      errorName: exception?.name || 'UnknownError',
      statusCode: 500,
    });
  }
}
