import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogsModule } from './dogs/dogs.module';
import { MongooseModule } from '@nestjs/mongoose';
import { KittyModule } from './kitty/kitty.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/nestdbdbdb'),DogsModule, KittyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
