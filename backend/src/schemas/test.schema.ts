import { Schema } from "mongoose";
import { ITest } from "../types/test.type";

export const TestSchema = new Schema<ITest>({
  hello: {
    type: String,
    required: true,
  },
});
