// src/trailer-comment/trailer-comment.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TrailerComment } from './schema/tc.schema';
import { CreateTrailerCommentDto } from './dto/create-trailer_comment.dto';
import { UpdateTrailerCommentDto } from './dto/update-trailer_comment.dto';

@Injectable()
export class TrailerCommentService {
  constructor(
    @InjectModel(TrailerComment.name) private trailerCommentModel: Model<TrailerComment>,
  ) {}

  // Create a new trailer comment
  async create(createTrailerCommentDto: CreateTrailerCommentDto): Promise<TrailerComment> {
    const createdTrailerComment = new this.trailerCommentModel(createTrailerCommentDto);
    return createdTrailerComment.save();
  }

  // Get all trailer comments
  async findAll(): Promise<TrailerComment[]> {
    return this.trailerCommentModel.find().exec();
  }

  // Get a trailer comment by ID
  async findOne(id: number): Promise<TrailerComment> {
    return this.trailerCommentModel.findOne({ id }).exec();
  }

  // Update a trailer comment by ID
  async update(id: number, updateTrailerCommentDto: UpdateTrailerCommentDto): Promise<TrailerComment> {
    return this.trailerCommentModel.findOneAndUpdate({ id }, updateTrailerCommentDto, { new: true }).exec();
  }

  // Delete a trailer comment by ID
  async remove(id: number): Promise<any> {
    return this.trailerCommentModel.findOneAndDelete({ id }).exec();
  }
}
