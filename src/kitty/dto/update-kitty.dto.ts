import { PartialType } from '@nestjs/mapped-types';
import { CreateKittyDto } from './create-kitty.dto';

export class UpdateKittyDto extends PartialType(CreateKittyDto) {}
