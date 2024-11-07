import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { GenreService } from './genre.service';
import { Genre } from './schema/genre.schema';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { CreateGenreDto } from './dto/create-genre.dto';  
import { UpdateGenreDto } from './dto/update-genre.dto';

@ApiTags('Genres') 
@Controller('genres')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new genre' })
  @ApiResponse({ status: 201, description: 'The genre has been successfully created.' })
  @ApiResponse({ status: 400, description: 'Invalid data.' })
  async create(@Body() createGenreDto: CreateGenreDto): Promise<Genre> {
    return this.genreService.create(createGenreDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all genres' })
  @ApiResponse({ status: 200, description: 'List of genres.', type: [Genre] })
  async findAll(): Promise<Genre[]> {
    return this.genreService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a genre by ID' })
  @ApiResponse({ status: 200, description: 'The genre has been found.', type: Genre })
  @ApiResponse({ status: 404, description: 'Genre not found.' })
  @ApiParam({ name: 'id', description: 'The genre ID' })
  async findOne(@Param('id') id: string): Promise<Genre> {
    return this.genreService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a genre' })
  @ApiResponse({ status: 200, description: 'The genre has been successfully updated.' })
  @ApiResponse({ status: 400, description: 'Invalid data.' })
  @ApiParam({ name: 'id', description: 'The genre ID' })
  async update(@Param('id') id: string, @Body() updateGenreDto: UpdateGenreDto): Promise<Genre> {
    return this.genreService.update(id, updateGenreDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a genre' })
  @ApiResponse({ status: 200, description: 'The genre has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Genre not found.' })
  @ApiParam({ name: 'id', description: 'The genre ID' })
  async remove(@Param('id') id: string): Promise<void> {
    return this.genreService.remove(id);
  }
}
