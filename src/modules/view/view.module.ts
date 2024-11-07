// src/view/view.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ViewController } from './view.controller';
import { ViewService } from './view.service';
import { View, ViewSchema } from './schema/view.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: View.name, schema: ViewSchema }]),
  ],
  controllers: [ViewController],
  providers: [ViewService],
})
export class ViewModule {}
