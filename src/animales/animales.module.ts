import { Module } from '@nestjs/common';
import { AnimalesService } from './animales.service';
import { AnimalesController } from './animales.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AnimalSchema } from './schemas/animal.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'animales',
        schema: AnimalSchema,
      },
    ]),
  ],
  providers: [AnimalesService],
  controllers: [AnimalesController],
})
export class AnimalesModule {}
