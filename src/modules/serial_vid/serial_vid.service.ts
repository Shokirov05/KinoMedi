// src/serialvid/serialvid.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SerialVid } from './schema/serialvid.schema';
import { CreateSerialVidDto } from './dto/create-serial_vid.dto';
import { UpdateSerialVidDto } from './dto/update-serial_vid.dto';

@Injectable()
export class SerialVidService {
  constructor(
    @InjectModel(SerialVid.name) private serialVidModel: Model<SerialVid>,
  ) {}

  // Create a new SerialVid
  async create(createSerialVidDto: CreateSerialVidDto): Promise<SerialVid> {
    const createdSerialVid = new this.serialVidModel(createSerialVidDto);
    return createdSerialVid.save();
  }

  // Get all SerialVids
  async findAll(): Promise<SerialVid[]> {
    return this.serialVidModel.find().exec();
  }

  // Get a SerialVid by ID
  async findOne(id: number): Promise<SerialVid> {
    return this.serialVidModel.findOne({ id }).exec();
  }

  // Update a SerialVid by ID
  async update(id: number, updateSerialVidDto: UpdateSerialVidDto): Promise<SerialVid> {
    return this.serialVidModel.findOneAndUpdate({ id }, updateSerialVidDto, { new: true }).exec();
  }

  // Delete a SerialVid by ID
  async remove(id: number): Promise<any> {
    return this.serialVidModel.findOneAndDelete({ id }).exec();
  }
}
