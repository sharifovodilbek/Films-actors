// dto/create-actor.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class CreateActorDto {
  @ApiProperty({ example: 'Tom Hanks' })
  name: string;

}
