import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAnimalDto } from './dtos/create-animal.dto';
import { UpdateAnimalDto } from './dtos/update-animal.dto';
import { IAnimal } from './interfaces/animal.interface';

@Injectable()
export class AnimalesService {
  constructor(
    @InjectModel('animales') private readonly animalModel: Model<IAnimal>,
  ) {}

  async getAnimales(): Promise<IAnimal[]> {
    return await this.animalModel.find();
  }

  async getAnimal(id: string): Promise<IAnimal> {
    const animal = await this.animalModel.findById(id);

    if (!animal) throw new NotFoundException(`No se encontro el animal ${id}`);

    return animal;
  }

  async createAnimal(animalDto: CreateAnimalDto) {
    const animal = await new this.animalModel(animalDto);
    return await animal.save();
  }

  async updateAnimal(id: string, animalDto: UpdateAnimalDto) {
    const animal = await this.animalModel.findByIdAndUpdate(id, animalDto, {
      new: true,
    });

    if (!animal) throw new NotFoundException(`No se encontro el animal ${id}`);

    return animal;
  }

  async deleteAnimal(id: string) {
    const animal = await this.animalModel.findByIdAndDelete(id);

    if (!animal) throw new NotFoundException(`No se encontro el animal ${id}`);

    return animal;
  }
}
