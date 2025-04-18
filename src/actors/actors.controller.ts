import { Controller, Post, Get, Param, Body, Delete, Put, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ActorsService } from './actors.service';
import { Actor } from './entities/actor.entity';
import { diskStorage } from 'multer';
import { UploadMiddleware } from './../multer/upload';

@Controller('actors')
export class ActorsController {
  constructor(private readonly actorsService: ActorsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image', { storage: UploadMiddleware.storage }))
  async create(@Body() actorDto: any, @UploadedFile() image: Express.Multer.File) {
    actorDto.image = image.path;
    return this.actorsService.create(actorDto);
  }

  @Get()
  async findAll(): Promise<Actor[]> {
    return this.actorsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.actorsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() actorDto: any) {
    return this.actorsService.update(id, actorDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.actorsService.remove(id);
  }
}
