import { model, Schema } from "mongoose";
import { ITest } from "../types/test.type";

const Test = new Schema<ITest>({
  hello: {
    type: String,
    required: true,
  },
});

export const TestSchema = model<ITest>("Test", Test);
