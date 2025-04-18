import { Controller, Post, Get, Param, Body, Delete, Put, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FilmsService } from './films.service';
import { Film } from './entities/film.entity';
import { diskStorage } from 'multer';
import { UploadMiddleware } from '../multer/upload';

@Controller('films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image', { storage: UploadMiddleware.storage }))
  async create(@Body() filmDto: any, @UploadedFile() image: Express.Multer.File) {
    filmDto.image = image.path;
    return this.filmsService.create(filmDto);
  }

  @Get()
  async findAll() {
    return this.filmsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string){
    return this.filmsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() filmDto: any) {
    return this.filmsService.update(id, filmDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.filmsService.remove(id);
  }
}
