import { Module } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { DogsController } from './dogs.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { dog, dogSchema } from './schemas/dog.schemas';

@Module({
  imports:[MongooseModule.forFeature([{name:dog.name,schema:dogSchema}])],
  controllers: [DogsController],
  providers: [DogsService],
})
export class DogsModule {}
