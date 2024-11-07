import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { TrailerLikeService } from './trailer_likes.service';
import { TrailerLike } from './schema/tl.schema';
import { CreateTrailerLikeDto } from './dto/create-trailer_like.dto';
import { UpdateTrailerLikeDto } from './dto/update-trailer_like.dto';

@ApiTags('TrailerLikes')
@Controller('trailer-likes')
export class TrailerLikeController {
  constructor(private readonly trailerLikeService: TrailerLikeService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new trailer like' })
  @ApiResponse({ status: 201, description: 'The trailer like has been successfully created.' })
  async create(@Body() createTrailerLikeDto: CreateTrailerLikeDto): Promise<TrailerLike> {
    return this.trailerLikeService.create(createTrailerLikeDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all trailer likes' })
  @ApiResponse({ status: 200, description: 'List of all trailer likes' })
  async findAll(): Promise<TrailerLike[]> {
    return this.trailerLikeService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a trailer like by ID' })
  @ApiResponse({ status: 200, description: 'The trailer like was found' })
  @ApiParam({ name: 'id', description: 'TrailerLike ID' })
  async findOne(@Param('id') id: number): Promise<TrailerLike> {
    return this.trailerLikeService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a trailer like' })
  @ApiResponse({ status: 200, description: 'The trailer like has been successfully updated.' })
  @ApiParam({ name: 'id', description: 'TrailerLike ID' })
  async update(
    @Param('id') id: number,
    @Body() updateTrailerLikeDto: UpdateTrailerLikeDto,
  ): Promise<TrailerLike> {
    return this.trailerLikeService.update(id, updateTrailerLikeDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a trailer like' })
  @ApiResponse({ status: 200, description: 'The trailer like has been deleted.' })
  @ApiParam({ name: 'id', description: 'TrailerLike ID' })
  async remove(@Param('id') id: number): Promise<any> {
    return this.trailerLikeService.remove(id);
  }
}
