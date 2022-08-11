import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AnimalesService } from './animales.service';
import { CreateAnimalDto } from './dtos/create-animal.dto';
import { UpdateAnimalDto } from './dtos/update-animal.dto';

@UseGuards(JwtAuthGuard)
@Controller('animales')
export class AnimalesController {
  constructor(private readonly animalesService: AnimalesService) {}


  @Get()
  async getAnimales(@Res() res: Response) {
    const animales = await this.animalesService.getAnimales();

    return res.status(HttpStatus.OK).json({
      message: 'Listado de Animales almacenados',
      animales,
    });
  }

  @Get(':id')
  async getAnimal(@Res() res: Response, @Param('id') id: string) {
    const animal = await this.animalesService.getAnimal(id);

    return res.status(HttpStatus.OK).json({
      message: 'Animal seleccionado',
      animal,
    });
  }

  @Post()
  async createAnimal(@Res() res: Response, @Body() animalDto: CreateAnimalDto) {
    const animal = await this.animalesService.createAnimal(animalDto);

    return res.status(HttpStatus.OK).json({
      message: 'Animal Creado',
      animal,
    });
  }

  @Put(':id')
  async updateAnimal(
    @Res() res: Response,
    @Param('id') id: string,
    @Body() animalDto: UpdateAnimalDto,
  ) {
    const animal = await this.animalesService.updateAnimal(id, animalDto);

    return res.status(HttpStatus.OK).json({
      message: 'Animal Editado',
      animal,
    });
  }

  @Delete(':id')
  async deleteAnimal(@Res() res: Response, @Param('id') id: string) {
    const animal = await this.animalesService.deleteAnimal(id);

    return res.status(HttpStatus.OK).json({
      message: 'Animal Eliminado',
      animal,
    });
  }
}
