import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name)private user:Model<User>,private readonly jwt:JwtService){}
  async findUser(username:string){
    try{
    let user = await this.user.findOne({username});
    return user
    }catch(error){
    return error;
    }
    
  }
  async register(data:CreateUserDto){
    let user = await this.findUser(data.username);
    if(user ){
      throw new BadRequestException('user exists')
    }
    let hash = bcrypt.hashSync(data.password,10);
    let newUser = await this.user.create({
      username:data.username,
      password:hash
    });
    return newUser;
  }
  async login(data:CreateUserDto){
    let user = await this.findUser(data.username);
    if(!user){
      throw new BadRequestException('user not exists')
    }
    let match = bcrypt.compareSync(data.password, user.password);
    if(!match){
      throw new UnauthorizedException('wrong credentials')
    }
    let token = this.jwt.sign({id:user._id});
    return {token};
  }
}