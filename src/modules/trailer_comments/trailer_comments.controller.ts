// src/trailer-comment/trailer-comment.controller.ts

import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { TrailerCommentService } from './trailer_comments.service';
import { TrailerComment } from './schema/tc.schema';
import { CreateTrailerCommentDto } from './dto/create-trailer_comment.dto';
import { UpdateTrailerCommentDto } from './dto/update-trailer_comment.dto';

@ApiTags('TrailerComments')
@Controller('trailer-comments')
export class TrailerCommentController {
  constructor(private readonly trailerCommentService: TrailerCommentService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new trailer comment' })
  @ApiResponse({ status: 201, description: 'The trailer comment has been successfully created.' })
  async create(@Body() createTrailerCommentDto: CreateTrailerCommentDto): Promise<TrailerComment> {
    return this.trailerCommentService.create(createTrailerCommentDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all trailer comments' })
  @ApiResponse({ status: 200, description: 'List of all trailer comments' })
  async findAll(): Promise<TrailerComment[]> {
    return this.trailerCommentService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a trailer comment by ID' })
  @ApiResponse({ status: 200, description: 'The trailer comment was found' })
  @ApiParam({ name: 'id', description: 'TrailerComment ID' })
  async findOne(@Param('id') id: number): Promise<TrailerComment> {
    return this.trailerCommentService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a trailer comment' })
  @ApiResponse({ status: 200, description: 'The trailer comment has been successfully updated.' })
  @ApiParam({ name: 'id', description: 'TrailerComment ID' })
  async update(
    @Param('id') id: number,
    @Body() updateTrailerCommentDto: UpdateTrailerCommentDto,
  ): Promise<TrailerComment> {
    return this.trailerCommentService.update(id, updateTrailerCommentDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a trailer comment' })
  @ApiResponse({ status: 200, description: 'The trailer comment has been deleted.' })
  @ApiParam({ name: 'id', description: 'TrailerComment ID' })
  async remove(@Param('id') id: number): Promise<any> {
    return this.trailerCommentService.remove(id);
  }
}
