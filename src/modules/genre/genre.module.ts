import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GenreService } from './genre.service';  
import { GenreController } from './genre.controller';  
import { Genre, GenreSchema } from './schema/genre.schema'; 

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Genre.name, schema: GenreSchema }]), 
  ],
  controllers: [GenreController],
  providers: [GenreService],
})
export class GenreModule {}
