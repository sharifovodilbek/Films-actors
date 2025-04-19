import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  Delete,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { FilmsService } from './films.service';
import { CreateFilmDto } from './dto/create-film.dto';
import { ApiTags, ApiBody, ApiQuery } from '@nestjs/swagger';
import { AuthGuard } from 'src/guards/auth.guard';
import { RolesGuard } from 'src/guards/roles.guard';
import { Roles } from 'src/user/decorators/roles.decorators';
import { Role } from 'src/user/enum/role.enum';

@ApiTags('Films')
@Controller('films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}
  @Roles(Role.ADMIN)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard)
  @Post()
  @ApiBody({ type: CreateFilmDto })
  async create(@Body() filmDto: CreateFilmDto) {
    return this.filmsService.create(filmDto);
  }
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @Get()
  async findAll(@Query('page') page: number, @Query('limit') limit: number) {
    return this.filmsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.filmsService.findOne(id);
  }
  @Roles(Role.ADMIN, Role.SUPERADMIN)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard)
  @Put(':id')
  @ApiBody({ type: CreateFilmDto })
  async update(@Param('id') id: string, @Body() filmDto: CreateFilmDto) {
    return this.filmsService.update(id, filmDto);
  }
  @Roles(Role.ADMIN)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.filmsService.remove(id);
  }
}
