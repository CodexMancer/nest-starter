import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KittyService } from './kitty.service';
import { CreateKittyDto } from './dto/create-kitty.dto';
import { UpdateKittyDto } from './dto/update-kitty.dto';

@Controller('kitty')
export class KittyController {
  constructor(private readonly kittyService: KittyService) {}

  @Post()
  create(@Body() createKittyDto: CreateKittyDto) {
    return this.kittyService.create(createKittyDto);
  }

  @Get()
  findAll() {
    return this.kittyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kittyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKittyDto: UpdateKittyDto) {
    return this.kittyService.update(+id, updateKittyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kittyService.remove(+id);
  }
}
