import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ActorsModule } from './actors/actors.module';
import { FilmsModule } from './films/films.module';
import { UploadModule } from './upload/upload.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/n17'),
     UserModule,
     FilmsModule,
     ActorsModule,
     UploadModule,
     
     ], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
