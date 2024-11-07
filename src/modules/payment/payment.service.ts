// src/payment/payment.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Payment } from './schema/payment.schema';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';

@Injectable()
export class PaymentService {
  constructor(
    @InjectModel(Payment.name) private paymentModel: Model<Payment>,
  ) {}

  // Create a new Payment
  async create(createPaymentDto: CreatePaymentDto): Promise<Payment> {
    const createdPayment = new this.paymentModel(createPaymentDto);
    return createdPayment.save();
  }

  // Find all Payments
  async findAll(): Promise<Payment[]> {
    return this.paymentModel.find().exec();
  }

  // Find a Payment by ID
  async findOne(id: number): Promise<Payment> {
    return this.paymentModel.findOne({ id }).exec();
  }

  // Update Payment by ID
  async update(id: number, updatePaymentDto: UpdatePaymentDto): Promise<Payment> {
    return this.paymentModel.findOneAndUpdate({ id }, updatePaymentDto, { new: true }).exec();
  }

  // Delete Payment by ID
  async remove(id: number): Promise<any> {
    return this.paymentModel.findOneAndDelete({ id }).exec();
  }
}
