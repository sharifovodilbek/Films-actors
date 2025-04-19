import { Controller, Post, Get, Param, Body, Delete, Put, Query, UseGuards } from '@nestjs/common';
import { ActorsService } from './actors.service';
import { ApiBody, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CreateActorDto } from './dto/create-actor.dto';
import { Roles } from 'src/user/decorators/roles.decorators';
import { RolesGuard } from 'src/guards/roles.guard';
import { AuthGuard } from 'src/guards/auth.guard';
import { Role } from 'src/user/enum/role.enum';

@ApiTags('Actors')
@Controller('actors')
export class ActorsController {
  constructor(private readonly actorsService: ActorsService) {}
  @Roles(Role.ADMIN)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard)
  @Post()
  @ApiBody({ type: CreateActorDto })
  async create(@Body() actorDto: CreateActorDto) {
    return this.actorsService.create(actorDto);
  }
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @Get()
  async findAll(@Query('page') page: number, @Query('limit') limit: number) {
    return this.actorsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.actorsService.findOne(id);
  }
  @Roles(Role.ADMIN, Role.USER)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard)
  @Put(':id')
  async update(@Param('id') id: string, @Body() actorDto: CreateActorDto) {
    return this.actorsService.update(id, actorDto);
  }
  @Roles(Role.ADMIN)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.actorsService.remove(id);
  }
}
