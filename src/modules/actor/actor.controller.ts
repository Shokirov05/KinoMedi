import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ActorService } from './actor.service';
import { CreateActorDto } from './dto/create-actor.dto';
import { UpdateActorDto } from './dto/update-actor.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Actor } from './interface/actor.interface';

@ApiTags('Actors')
@Controller('actors')
export class ActorController {
  constructor(private readonly actorService: ActorService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new actor' })
  @ApiResponse({ status: 201, description: 'Actor created successfully.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  async create(@Body() createActorDto: CreateActorDto): Promise<Actor> {
    return this.actorService.create(createActorDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all actors' })
  @ApiResponse({ status: 200, description: 'List of actors retrieved successfully.' })
  async findAll(): Promise<Actor[]> {
    return this.actorService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a single actor by ID' })
  @ApiResponse({ status: 200, description: 'Actor found.' })
  @ApiResponse({ status: 404, description: 'Actor not found.' })
  async findOne(@Param('id') id: string): Promise<Actor> {
    return this.actorService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an actor by ID' })
  @ApiResponse({ status: 200, description: 'Actor updated successfully.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 404, description: 'Actor not found.' })
  async update(
    @Param('id') id: string,
    @Body() updateActorDto: UpdateActorDto,
  ): Promise<Actor> {
    return this.actorService.update(id, updateActorDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an actor by ID' })
  @ApiResponse({ status: 200, description: 'Actor deleted successfully.' })
  @ApiResponse({ status: 404, description: 'Actor not found.' })
  async remove(@Param('id') id: string): Promise<Actor> {
    return this.actorService.remove(id);
  }
}
