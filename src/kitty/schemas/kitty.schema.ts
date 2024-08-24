import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, HydrateOptions, SchemaTypes, Types } from 'mongoose';
import { dog } from 'src/dogs/schemas/dog.schemas';

export type kittyDocument = HydratedDocument<kitty>;

@Schema()
export class kitty {
  @Prop({ type: String, required: true, unique: true })
  name: string;

  @Prop({type: SchemaTypes.ObjectId, ref: 'dog', required: true, unique: true,})
  dog: dog | Types.ObjectId;

  @Prop({ type: Number, required: true })
  age: number;
}

export const kittySchema = SchemaFactory.createForClass(kitty);
kittySchema.set('toJSON', { flattenObjectIds: true, versionKey: false });
kittySchema.set('toObject', { flattenObjectIds: true, versionKey: false });