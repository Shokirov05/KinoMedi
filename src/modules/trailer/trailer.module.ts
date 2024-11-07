// src/trailer/trailer.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TrailerController } from './trailer.controller';
import { TrailerService } from './trailer.service';
import { Trailer, TrailerSchema } from './schema/trailer.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Trailer.name, schema: TrailerSchema }]),
  ],
  controllers: [TrailerController],
  providers: [TrailerService],
})
export class TrailerModule {}
