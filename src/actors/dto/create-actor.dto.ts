import { ApiProperty } from '@nestjs/swagger';

export class CreateActorDto {
  @ApiProperty({
    example: 'SH Odilbek',
    description: 'The name of the actor',
    type: String,
  })
  name: string;
}
