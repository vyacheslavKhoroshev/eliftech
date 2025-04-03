import { Schema } from "mongoose";
import { IComplection } from "../types/complection.type";

const answerSchema = new Schema({});

export const ComplectionSchema = new Schema<IComplection>({
  quizId: {
    type: String,
    required: true,
  },
  answers: {
    type: Array(Object),
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});
