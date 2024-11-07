import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Card } from './interface/card.interface';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';

@Injectable()
export class CardService {
  constructor(@InjectModel('Card') private readonly cardModel: Model<Card>) {}

  async create(createCardDto: CreateCardDto): Promise<Card> {
    const createdCard = new this.cardModel(createCardDto);
    return createdCard.save();
  }

  async findAll(): Promise<Card[]> {
    return this.cardModel.find().exec();
  }

  async findOne(id: string): Promise<Card> {
    return this.cardModel.findById(id).exec();
  }

  async update(id: string, updateCardDto: UpdateCardDto): Promise<Card> {
    return this.cardModel.findByIdAndUpdate(id, updateCardDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Card> {
    return this.cardModel.findByIdAndDelete(id).exec();
  }
}
