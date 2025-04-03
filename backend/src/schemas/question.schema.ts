import { Schema } from "mongoose";
import { IQuestion } from "../types/quiz.type";

export const QuestionSchema = new Schema<IQuestion>({
  question: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  choices: {
    type: Schema.Types.Mixed,
    required: true,
  },
});
