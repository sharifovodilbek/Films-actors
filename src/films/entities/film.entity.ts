import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FilmDocument = Film & Document;

@Schema()
export class Film {
  @Prop()
  name: string;

  @Prop()
  image: string;

}

export const FilmSchema = SchemaFactory.createForClass(Film);