import { Controller, Get,  Body, Patch, Param, Delete, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/register')
  register(@Body()user:CreateUserDto){
    return this.userService.register(user)
  }
  @Post('/login')
  login(@Body()user:CreateUserDto){
    return this.userService.login(user)
  }
  
}

  