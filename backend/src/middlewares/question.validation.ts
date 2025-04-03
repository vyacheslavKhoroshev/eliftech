import { z, ZodType } from "zod";
import { IQuestion } from "../types/quiz.type";
import { ObjectId } from "mongodb";

export const QuestionValidateSchema = z
  .object({
    question: z.string().min(5),
    type: z.enum(["text", "multiple choices", "single choice"]),
    choices: z.array(z.string()),
  })
  .strict() satisfies ZodType<IQuestion>;
