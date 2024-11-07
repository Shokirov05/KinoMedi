// src/view/view.controller.ts

import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { ViewService } from './view.service';
import { View } from './schema/view.schema';
import { CreateViewDto } from './dto/create-view.dto';
import { UpdateViewDto } from './dto/update-view.dto';

@ApiTags('Views')
@Controller('views')
export class ViewController {
  constructor(private readonly viewService: ViewService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new view' })
  @ApiResponse({ status: 201, description: 'The view has been successfully created.' })
  async create(@Body() createViewDto: CreateViewDto): Promise<View> {
    return this.viewService.create(createViewDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all views' })
  @ApiResponse({ status: 200, description: 'List of all views' })
  async findAll(): Promise<View[]> {
    return this.viewService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a view by ID' })
  @ApiResponse({ status: 200, description: 'The view was found' })
  @ApiParam({ name: 'id', description: 'View ID' })
  async findOne(@Param('id') id: number): Promise<View> {
    return this.viewService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a view' })
  @ApiResponse({ status: 200, description: 'The view has been successfully updated.' })
  @ApiParam({ name: 'id', description: 'View ID' })
  async update(
    @Param('id') id: number,
    @Body() updateViewDto: UpdateViewDto,
  ): Promise<View> {
    return this.viewService.update(id, updateViewDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a view' })
  @ApiResponse({ status: 200, description: 'The view has been deleted.' })
  @ApiParam({ name: 'id', description: 'View ID' })
  async remove(@Param('id') id: number): Promise<any> {
    return this.viewService.remove(id);
  }
}
