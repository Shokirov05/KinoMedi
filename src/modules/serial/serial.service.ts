// src/serial/serial.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Serial } from './schema/serial.schema';
import { CreateSerialDto } from './dto/create-serial.dto';
import { UpdateSerialDto } from './dto/update-serial.dto';

@Injectable()
export class SerialService {
  constructor(
    @InjectModel(Serial.name) private serialModel: Model<Serial>,
  ) {}

  // Create a new Serial
  async create(createSerialDto: CreateSerialDto): Promise<Serial> {
    const createdSerial = new this.serialModel(createSerialDto);
    return createdSerial.save();
  }

  // Get all Serials
  async findAll(): Promise<Serial[]> {
    return this.serialModel.find().exec();
  }

  // Get a Serial by ID
  async findOne(id: number): Promise<Serial> {
    return this.serialModel.findOne({ id }).exec();
  }

  // Update a Serial by ID
  async update(id: number, updateSerialDto: UpdateSerialDto): Promise<Serial> {
    return this.serialModel.findOneAndUpdate({ id }, updateSerialDto, { new: true }).exec();
  }

  // Delete a Serial by ID
  async remove(id: number): Promise<any> {
    return this.serialModel.findOneAndDelete({ id }).exec();
  }
}
