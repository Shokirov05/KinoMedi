// src/trailer/trailer.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Trailer } from './schema/trailer.schema';
import { CreateTrailerDto } from './dto/create-trailer.dto';
import { UpdateTrailerDto } from './dto/update-trailer.dto';

@Injectable()
export class TrailerService {
  constructor(
    @InjectModel(Trailer.name) private trailerModel: Model<Trailer>,
  ) {}

  // Create a new trailer
  async create(createTrailerDto: CreateTrailerDto): Promise<Trailer> {
    const createdTrailer = new this.trailerModel(createTrailerDto);
    return createdTrailer.save();
  }

  // Get all trailers
  async findAll(): Promise<Trailer[]> {
    return this.trailerModel.find().exec();
  }

  // Get a trailer by ID
  async findOne(id: number): Promise<Trailer> {
    return this.trailerModel.findOne({ id }).exec();
  }

  // Update a trailer by ID
  async update(id: number, updateTrailerDto: UpdateTrailerDto): Promise<Trailer> {
    return this.trailerModel.findOneAndUpdate({ id }, updateTrailerDto, { new: true }).exec();
  }

  // Delete a trailer by ID
  async remove(id: number): Promise<any> {
    return this.trailerModel.findOneAndDelete({ id }).exec();
  }
}
