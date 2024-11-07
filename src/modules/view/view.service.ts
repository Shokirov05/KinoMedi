// src/view/view.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { View } from './schema/view.schema';
import { CreateViewDto } from './dto/create-view.dto';
import { UpdateViewDto } from './dto/update-view.dto';

@Injectable()
export class ViewService {
  constructor(@InjectModel(View.name) private viewModel: Model<View>) {}

  // Create a new view
  async create(createViewDto: CreateViewDto): Promise<View> {
    const createdView = new this.viewModel(createViewDto);
    return createdView.save();
  }

  // Get all views
  async findAll(): Promise<View[]> {
    return this.viewModel.find().exec();
  }

  // Get a view by ID
  async findOne(id: number): Promise<View> {
    return this.viewModel.findOne({ id }).exec();
  }

  // Update a view by ID
  async update(id: number, updateViewDto: UpdateViewDto): Promise<View> {
    return this.viewModel.findOneAndUpdate({ id }, updateViewDto, { new: true }).exec();
  }

  // Delete a view by ID
  async remove(id: number): Promise<any> {
    return this.viewModel.findOneAndDelete({ id }).exec();
  }
}
