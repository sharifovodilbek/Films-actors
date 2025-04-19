import { ApiProperty } from "@nestjs/swagger";

export class CreateFilmDto {
    @ApiProperty({
        description: "Film nomi",
        type: String,
    })
    name: string;
    @ApiProperty({
        description: "Film rasmi",
        type: String,
    })
    image: string;
}
