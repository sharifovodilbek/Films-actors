import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/user.entity';

@Module({
  imports:[
    MongooseModule.forFeature([{name:User.name,schema:UserSchema}]),
    JwtModule.register({
      global:true,
      secret:'secret'
    })
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
