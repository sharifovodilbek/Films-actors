import { Module } from '@nestjs/common';
import { FilmsService } from './films.service';
import { FilmsController } from './films.controller';
import { Mongoose } from 'mongoose';
import { Film, FilmSchema } from './entities/film.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{name:Film.name,schema:FilmSchema}])],
  controllers: [FilmsController],
  providers: [FilmsService],
})
export class FilmsModule {}
