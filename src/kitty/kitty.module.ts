import { Module } from '@nestjs/common';
import { KittyService } from './kitty.service';
import { KittyController } from './kitty.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { kitty, kittySchema } from './schemas/kitty.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:kitty.name,schema:kittySchema}])],
  controllers: [KittyController],
  providers: [KittyService],
})
export class KittyModule {}
