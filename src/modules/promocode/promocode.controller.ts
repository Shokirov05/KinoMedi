// src/promocode/promocode.controller.ts

import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { PromocodeService } from './promocode.service';
import { Promocode } from './schema/promocode.schema';
import { CreatePromocodeDto } from './dto/create-promocode.dto';
import { UpdatePromocodeDto } from './dto/update-promocode.dto';

@ApiTags('Promocodes')
@Controller('promocodes')
export class PromocodeController {
  constructor(private readonly promocodeService: PromocodeService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new promocode' })
  @ApiResponse({ status: 201, description: 'The promocode has been successfully created.' })
  async create(@Body() createPromocodeDto: CreatePromocodeDto): Promise<Promocode> {
    return this.promocodeService.create(createPromocodeDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all promocodes' })
  @ApiResponse({ status: 200, description: 'List of all promocodes' })
  async findAll(): Promise<Promocode[]> {
    return this.promocodeService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a promocode by ID' })
  @ApiResponse({ status: 200, description: 'The promocode was found' })
  @ApiParam({ name: 'id', description: 'Promocode ID' })
  async findOne(@Param('id') id: number): Promise<Promocode> {
    return this.promocodeService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a promocode' })
  @ApiResponse({ status: 200, description: 'The promocode has been successfully updated.' })
  @ApiParam({ name: 'id', description: 'Promocode ID' })
  async update(
    @Param('id') id: number,
    @Body() updatePromocodeDto: UpdatePromocodeDto,
  ): Promise<Promocode> {
    return this.promocodeService.update(id, updatePromocodeDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a promocode' })
  @ApiResponse({ status: 200, description: 'The promocode has been deleted.' })
  @ApiParam({ name: 'id', description: 'Promocode ID' })
  async remove(@Param('id') id: number): Promise<any> {
    return this.promocodeService.remove(id);
  }
}
