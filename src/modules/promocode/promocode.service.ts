// src/promocode/promocode.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Promocode } from './schema/promocode.schema';
import { CreatePromocodeDto } from './dto/create-promocode.dto';
import { UpdatePromocodeDto } from './dto/update-promocode.dto';

@Injectable()
export class PromocodeService {
  constructor(
    @InjectModel(Promocode.name) private promocodeModel: Model<Promocode>,
  ) {}

  // Create a new Promocode
  async create(createPromocodeDto: CreatePromocodeDto): Promise<Promocode> {
    const createdPromocode = new this.promocodeModel(createPromocodeDto);
    return createdPromocode.save();
  }

  // Get all Promocodes
  async findAll(): Promise<Promocode[]> {
    return this.promocodeModel.find().exec();
  }

  // Find a Promocode by ID
  async findOne(id: number): Promise<Promocode> {
    return this.promocodeModel.findOne({ id }).exec();
  }

  // Update a Promocode by ID
  async update(id: number, updatePromocodeDto: UpdatePromocodeDto): Promise<Promocode> {
    return this.promocodeModel.findOneAndUpdate({ id }, updatePromocodeDto, { new: true }).exec();
  }

  // Delete a Promocode by ID
  async remove(id: number): Promise<any> {
    return this.promocodeModel.findOneAndDelete({ id }).exec();
  }
}
