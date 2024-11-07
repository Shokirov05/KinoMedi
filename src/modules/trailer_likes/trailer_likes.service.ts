import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TrailerLike } from './schema/tl.schema';
import { CreateTrailerLikeDto } from './dto/create-trailer_like.dto';
import { UpdateTrailerLikeDto } from './dto/update-trailer_like.dto';

@Injectable()
export class TrailerLikeService {
  constructor(
    @InjectModel(TrailerLike.name) private trailerLikeModel: Model<TrailerLike>,
  ) {}

  async create(createTrailerLikeDto: CreateTrailerLikeDto): Promise<TrailerLike> {
    const createdTrailerLike = new this.trailerLikeModel(createTrailerLikeDto);
    return createdTrailerLike.save();
  }

  async findAll(): Promise<TrailerLike[]> {
    return this.trailerLikeModel.find().exec();
  }

  async findOne(id: number): Promise<TrailerLike> {
    return this.trailerLikeModel.findOne({ id }).exec();
  }

  async update(id: number, updateTrailerLikeDto: UpdateTrailerLikeDto): Promise<TrailerLike> {
    return this.trailerLikeModel.findOneAndUpdate({ id }, updateTrailerLikeDto, { new: true }).exec();
  }

  async remove(id: number): Promise<any> {
    return this.trailerLikeModel.findOneAndDelete({ id }).exec();
  }
}
