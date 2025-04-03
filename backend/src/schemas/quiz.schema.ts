import { Model, Schema } from "mongoose";
import { IQuiz } from "../types/quiz.type";
import { QuestionSchema } from "./question.schema";
import { NextFunction } from "express";

const autoPopulateLead = function (this: Model<IQuiz>, next: NextFunction) {
  this.populate("complections", "");
  next();
};

export const QuizSchema = new Schema<IQuiz>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
    unique: true,
  },
  questions: [QuestionSchema],
  complections: [{ type: Schema.Types.ObjectId, ref: "Complection" }],
});
