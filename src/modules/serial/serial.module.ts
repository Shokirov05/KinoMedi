// src/serial/serial.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SerialController } from './serial.controller';
import { SerialService } from './serial.service';
import { Serial, SerialSchema } from './schema/serial.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Serial.name, schema: SerialSchema }]),
  ],
  controllers: [SerialController],
  providers: [SerialService],
})
export class SerialModule {}
