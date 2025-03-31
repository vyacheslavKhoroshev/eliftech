import { model, Schema } from "mongoose";
import { IComplection, IQuiestion, IQuiz } from "../types/quiz.type";

const Question = new Schema<IQuiestion>(
  {
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
  },
  { strict: true }
);

const Complection = new Schema<IComplection>(
  {
    answers: {
      type: Array(String),
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
  { strict: true }
);

const Quiz = new Schema<IQuiz>(
  {
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
    questions: {
      type: Array(Question),
      required: true,
    },
    complections: Array(Complection),
    questionsAmount: {
      type: Number,
      default: function () {
        return this.questions.length;
      },
    },
    completionsAmount: {
      type: Number,
      default: function () {
        return this.complections.length;
      },
    },
  },
  { strict: true }
);

Quiz.pre("save", function (next) {
  if (this.isModified("questions")) {
    this.questionsAmount = this.questions.length;
  }
  if (this.isModified("complections")) {
    this.completionsAmount = this.complections.length;
    next();
  }
});

export const QuizSchema = model<IQuiz>("Quiz", Quiz);
