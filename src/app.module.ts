import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AnimalesModule } from './animales/animales.module';
import { MongoModule } from './config/mongo.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './users/user.module';
import { UsersController } from './users/users.controller';


@Module({
  imports: [AnimalesModule, MongoModule, AuthModule, UserModule],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}
