import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CardService } from './card.service';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Card } from './interface/card.interface';

@ApiTags('Cards')
@Controller('cards')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new card' })
  @ApiResponse({ status: 201, description: 'Card created successfully.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  async create(@Body() createCardDto: CreateCardDto): Promise<Card> {
    return this.cardService.create(createCardDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all cards' })
  @ApiResponse({ status: 200, description: 'List of cards retrieved successfully.' })
  async findAll(): Promise<Card[]> {
    return this.cardService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a card by ID' })
  @ApiResponse({ status: 200, description: 'Card found.' })
  @ApiResponse({ status: 404, description: 'Card not found.' })
  async findOne(@Param('id') id: string): Promise<Card> {
    return this.cardService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a card by ID' })
  @ApiResponse({ status: 200, description: 'Card updated successfully.' })
  @ApiResponse({ status: 404, description: 'Card not found.' })
  async update(
    @Param('id') id: string,
    @Body() updateCardDto: UpdateCardDto,
  ): Promise<Card> {
    return this.cardService.update(id, updateCardDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a card by ID' })
  @ApiResponse({ status: 200, description: 'Card deleted successfully.' })
  @ApiResponse({ status: 404, description: 'Card not found.' })
  async remove(@Param('id') id: string): Promise<Card> {
    return this.cardService.remove(id);
  }
}
