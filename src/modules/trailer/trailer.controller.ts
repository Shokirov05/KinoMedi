// src/trailer/trailer.controller.ts

import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { TrailerService } from './trailer.service';
import { Trailer } from './schema/trailer.schema';
import { CreateTrailerDto } from './dto/create-trailer.dto';
import { UpdateTrailerDto } from './dto/update-trailer.dto';

@ApiTags('Trailers')
@Controller('trailers')
export class TrailerController {
  constructor(private readonly trailerService: TrailerService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new trailer' })
  @ApiResponse({ status: 201, description: 'The trailer has been successfully created.' })
  async create(@Body() createTrailerDto: CreateTrailerDto): Promise<Trailer> {
    return this.trailerService.create(createTrailerDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all trailers' })
  @ApiResponse({ status: 200, description: 'List of all trailers' })
  async findAll(): Promise<Trailer[]> {
    return this.trailerService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a trailer by ID' })
  @ApiResponse({ status: 200, description: 'The trailer was found' })
  @ApiParam({ name: 'id', description: 'Trailer ID' })
  async findOne(@Param('id') id: number): Promise<Trailer> {
    return this.trailerService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a trailer' })
  @ApiResponse({ status: 200, description: 'The trailer has been successfully updated.' })
  @ApiParam({ name: 'id', description: 'Trailer ID' })
  async update(
    @Param('id') id: number,
    @Body() updateTrailerDto: UpdateTrailerDto,
  ): Promise<Trailer> {
    return this.trailerService.update(id, updateTrailerDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a trailer' })
  @ApiResponse({ status: 200, description: 'The trailer has been deleted.' })
  @ApiParam({ name: 'id', description: 'Trailer ID' })
  async remove(@Param('id') id: number): Promise<any> {
    return this.trailerService.remove(id);
  }
}
