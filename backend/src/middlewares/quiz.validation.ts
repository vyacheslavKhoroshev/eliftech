import { z, ZodType } from "zod";
import { IQuiz } from "../types/quiz.type";
import { QuestionValidateSchema } from "./question.validation";

export const QuizValidateSchema = z
  .object({
    name: z.string().min(5),
    description: z.string().min(5),
    questions: z.array(QuestionValidateSchema).nonempty(),
  })
  .strict() satisfies ZodType<IQuiz>;

export const QuizValidateUpdateSchema = QuizValidateSchema.partial();
