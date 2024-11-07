import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Movie API')
    .setDescription('Swaggerda movie crudni boshqarish')
    .setVersion('00.00.01')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('kinomedia', app, document);
  const port = process.env.PORT || 3000;

  
  await app.listen(port);
  console.log(`Server running on http://localhost:${process.env.PORT}`); 
  console.log(`Server running on http://localhost:${process.env.PORT}/kinomedia`); 
}

bootstrap();
