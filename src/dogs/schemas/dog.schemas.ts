import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, HydrateOptions } from 'mongoose';

export type dogDocument = HydratedDocument<dog>;

@Schema()
export class dog {
  @Prop({ type: String, required: true, unique: true })
  name: string;

  @Prop({ type: String, required: true })
  color: string;

  @Prop({ type: Number, required: true })
  age: number;
}

export const dogSchema = SchemaFactory.createForClass(dog);
dogSchema.set('toJSON', { flattenObjectIds: true, versionKey: false });
dogSchema.set('toObject', { flattenObjectIds: true, versionKey: false });