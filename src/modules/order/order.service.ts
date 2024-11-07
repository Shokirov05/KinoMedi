// src/order/order.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from './schema/order.schema';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<Order>,
  ) {}

  // Create Order
  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const createdOrder = new this.orderModel(createOrderDto);
    return createdOrder.save();
  }

  // Find all Orders
  async findAll(): Promise<Order[]> {
    return this.orderModel.find().exec();
  }

  // Find Order by ID
  async findOne(id: string): Promise<Order> {
    return this.orderModel.findById(id).exec();
  }

  // Update Order by ID
  async update(id: string, updateOrderDto: UpdateOrderDto): Promise<Order> {
    return this.orderModel.findByIdAndUpdate(id, updateOrderDto, { new: true }).exec();
  }

  // Remove Order by ID
  async remove(id: string): Promise<any> {
    return this.orderModel.findByIdAndDelete(id).exec();
  }
}
