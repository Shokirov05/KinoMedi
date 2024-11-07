// src/serialvid/serialvid.controller.ts

import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { SerialVidService } from './serial_vid.service';
import { SerialVid } from './schema/serialvid.schema';
import { CreateSerialVidDto } from './dto/create-serial_vid.dto';
import { UpdateSerialVidDto } from './dto/update-serial_vid.dto';

@ApiTags('SerialVids')
@Controller('serialvids')
export class SerialVidController {
  constructor(private readonly serialVidService: SerialVidService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new serial video' })
  @ApiResponse({ status: 201, description: 'The serial video has been successfully created.' })
  async create(@Body() createSerialVidDto: CreateSerialVidDto): Promise<SerialVid> {
    return this.serialVidService.create(createSerialVidDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all serial videos' })
  @ApiResponse({ status: 200, description: 'List of all serial videos' })
  async findAll(): Promise<SerialVid[]> {
    return this.serialVidService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a serial video by ID' })
  @ApiResponse({ status: 200, description: 'The serial video was found' })
  @ApiParam({ name: 'id', description: 'SerialVid ID' })
  async findOne(@Param('id') id: number): Promise<SerialVid> {
    return this.serialVidService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a serial video' })
  @ApiResponse({ status: 200, description: 'The serial video has been successfully updated.' })
  @ApiParam({ name: 'id', description: 'SerialVid ID' })
  async update(
    @Param('id') id: number,
    @Body() updateSerialVidDto: UpdateSerialVidDto,
  ): Promise<SerialVid> {
    return this.serialVidService.update(id, updateSerialVidDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a serial video' })
  @ApiResponse({ status: 200, description: 'The serial video has been deleted.' })
  @ApiParam({ name: 'id', description: 'SerialVid ID' })
  async remove(@Param('id') id: number): Promise<any> {
    return this.serialVidService.remove(id);
  }
}
