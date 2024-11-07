// src/serialvid/serialvid.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SerialVidController } from './serial_vid.controller';
import { SerialVidService } from './serial_vid.service';
import { SerialVid, SerialVidSchema } from './schema/serialvid.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: SerialVid.name, schema: SerialVidSchema }]),
  ],
  controllers: [SerialVidController],
  providers: [SerialVidService],
})
export class SerialVidModule {}
