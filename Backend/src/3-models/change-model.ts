import { Document, Schema, model } from "mongoose";

// 1. Interface describing our model:
export interface IChangeModel extends Document {
  name: string;
}

// 2. Schema describing more data, validation and more:
export const changeSchema = new Schema<IChangeModel>(
  {
    name: {
      type: String,
      required: [true, "Missing name"],
      maxlength: [50, "Name to long"],
      minlength: [2, "Name to short"],
    },
  },
  {
    versionKey: false,
  }
);

// 3. Creating the model:
export const ChangeModel = model<IChangeModel>("changeModel", changeSchema, "Change");
