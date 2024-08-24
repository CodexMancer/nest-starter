import { Injectable } from '@nestjs/common';
import { CreateKittyDto } from './dto/create-kitty.dto';
import { UpdateKittyDto } from './dto/update-kitty.dto';
import { kitty } from './schemas/kitty.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class KittyService {

  constructor(@InjectModel(kitty.name) private readonly kittyModel:Model<kitty>){}

  async create(createKittyDto: CreateKittyDto) {
    const kittyDoc = new this.kittyModel(createKittyDto);
    const kitty = await kittyDoc.save();
    return kitty.toObject();
  }

  async findAll() {
    const kitty = await this.kittyModel.find();
    return kitty;
  }

  findOne(id: number) {
    return `This action returns a #${id} kitty`;
  }

  update(id: number, updateKittyDto: UpdateKittyDto) {
    return `This action updates a #${id} kitty`;
  }

  remove(id: number) {
    return `This action removes a #${id} kitty`;
  }
}
