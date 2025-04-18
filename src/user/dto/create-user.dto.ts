import { ApiProperty } from '@nestjs/swagger';
import { Role } from "../enum/role.enum";

export class CreateUserDto {
  @ApiProperty({
    description: 'Foydalanuvchining username',
    type: String,
  })
  username: string;

  @ApiProperty({
    description: 'Foydalanuvchining paroli',
    type: String,
  })
  password: string;

  @ApiProperty({
    description: 'Foydalanuvchining roli',
    enum: Role,  
  })
  role: Role;
}
