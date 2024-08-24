import { Types } from "mongoose";
import { dog } from "src/dogs/schemas/dog.schemas";

export class Kitty {
    name:string;
    dog?:Types.ObjectId | dog | null;
    age:number;
}
