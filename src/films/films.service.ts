import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Film } from './entities/film.entity';

@Injectable()
export class FilmsService {
  constructor(@InjectModel('Film') private filmModel: Model<Film>) {}

  async create(filmDto: any) {
    const createdFilm = new this.filmModel(filmDto);
    return createdFilm.save();
  }

  async findAll() {
    return this.filmModel.find().exec();
  }

  async findOne(id: string){
    return this.filmModel.findById(id).exec();
  }

  async update(id: string, filmDto: any) {
    return this.filmModel.findByIdAndUpdate(id, filmDto, { new: true });
  }

  async remove(id: string){
    return this.filmModel.findByIdAndDelete(id);
  }
}
