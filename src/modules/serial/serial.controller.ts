// src/serial/serial.controller.ts

import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { SerialService } from './serial.service';
import { Serial } from './schema/serial.schema';
import { CreateSerialDto } from './dto/create-serial.dto';
import { UpdateSerialDto } from './dto/update-serial.dto';

@ApiTags('Serials')
@Controller('serials')
export class SerialController {
  constructor(private readonly serialService: SerialService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new serial' })
  @ApiResponse({ status: 201, description: 'The serial has been successfully created.' })
  async create(@Body() createSerialDto: CreateSerialDto): Promise<Serial> {
    return this.serialService.create(createSerialDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all serials' })
  @ApiResponse({ status: 200, description: 'List of all serials' })
  async findAll(): Promise<Serial[]> {
    return this.serialService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a serial by ID' })
  @ApiResponse({ status: 200, description: 'The serial was found' })
  @ApiParam({ name: 'id', description: 'Serial ID' })
  async findOne(@Param('id') id: number): Promise<Serial> {
    return this.serialService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a serial' })
  @ApiResponse({ status: 200, description: 'The serial has been successfully updated.' })
  @ApiParam({ name: 'id', description: 'Serial ID' })
  async update(
    @Param('id') id: number,
    @Body() updateSerialDto: UpdateSerialDto,
  ): Promise<Serial> {
    return this.serialService.update(id, updateSerialDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a serial' })
  @ApiResponse({ status: 200, description: 'The serial has been deleted.' })
  @ApiParam({ name: 'id', description: 'Serial ID' })
  async remove(@Param('id') id: number): Promise<any> {
    return this.serialService.remove(id);
  }
}
