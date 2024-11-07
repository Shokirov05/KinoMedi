import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Genre, GenreDocument } from './schema/genre.schema';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';

@Injectable()
export class GenreService {
  constructor(@InjectModel(Genre.name) private genreModel: Model<GenreDocument>) {}

  async create(createGenreDto: CreateGenreDto): Promise<Genre> {
    const createdGenre = new this.genreModel(createGenreDto);
    return createdGenre.save();
  }

  async findAll(): Promise<Genre[]> {
    return this.genreModel.find().exec();
  }

  async findOne(id: string): Promise<Genre> {
    return this.genreModel.findById(id).exec();
  }

  async update(id: string, updateGenreDto: UpdateGenreDto): Promise<Genre> {
    return this.genreModel.findByIdAndUpdate(id, updateGenreDto, { new: true }).exec();
  }

  async remove(id: string): Promise<void> {
    await this.genreModel.findByIdAndDelete(id).exec();
  }
}
