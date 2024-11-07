import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Actor } from './interface/actor.interface';
import { CreateActorDto } from './dto/create-actor.dto';
import { UpdateActorDto } from './dto/update-actor.dto';

@Injectable()
export class ActorService {
  constructor(
    @InjectModel('Actor') private readonly actorModel: Model<Actor>,
  ) {}

  async create(createActorDto: CreateActorDto): Promise<Actor> {
    const createdActor = new this.actorModel(createActorDto);
    return createdActor.save();
  }

  async findAll(): Promise<Actor[]> {
    return this.actorModel.find().exec();
  }

  async findOne(id: string): Promise<Actor> {
    return this.actorModel.findById(id).exec();
  }

  async update(id: string, updateActorDto: UpdateActorDto): Promise<Actor> {
    return this.actorModel.findByIdAndUpdate(id, updateActorDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Actor> {
    return this.actorModel.findByIdAndDelete(id).exec();
  }
}
