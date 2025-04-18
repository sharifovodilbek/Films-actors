import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Actor } from './entities/actor.entity';

@Injectable()
export class ActorsService {
  constructor(@InjectModel('Actor') private actorModel: Model<Actor>) {}

  async create(actorDto: any) {
    const createdActor = new this.actorModel(actorDto);
    return createdActor.save();
  }

  async findAll() {
    return this.actorModel.find().exec();
  }

  async findOne(id: string) {
    return this.actorModel.findById(id).exec();
  }

  async update(id: string, actorDto: any) {
    return this.actorModel.findByIdAndUpdate(id, actorDto, { new: true });
  }

  async remove(id: string) {
    return this.actorModel.findByIdAndDelete(id);
  }
}
