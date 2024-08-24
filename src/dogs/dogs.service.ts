import { Injectable } from '@nestjs/common';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';
import { InjectModel } from '@nestjs/mongoose';
import { dog } from './schemas/dog.schemas';
import { Model } from 'mongoose';

@Injectable()
export class DogsService {

  constructor(@InjectModel(dog.name) private readonly dogModel:Model<dog>){}

  async create(createDogDto: CreateDogDto) {
    const dogDoc = new this.dogModel(createDogDto);
    const dog = await dogDoc.save();
    return dog.toObject();
  }

  async findAll() {
    const dog = await this.dogModel.find();
    return dog;
  }

  async findOne(id: string) {
    const dog = await this.dogModel.findById(id);
    return dog;
  }

  async findname(name: string) : Promise<dog | undefined>{
    return this.dogModel.findOne({name});
    
  }

  async update(id: string, updateDogDto: UpdateDogDto) {
    const option = {new:true};
    const dog = await this.dogModel.findByIdAndUpdate(id, updateDogDto,option)
    return dog;
  }

  async remove(id: string) {
    const dog = await this.dogModel.findByIdAndDelete(id);
    return dog;
  }
}
