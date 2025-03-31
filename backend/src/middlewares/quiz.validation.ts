import { z } from "zod";

const questionSchema = z
  .object({
    question: z.string().min(5),
    type: z.enum(["text", "multiple choices", "single choice"]),
    choices: z.union([z.array(z.string()), z.string()]),
  })
  .strict();

const completionSchema = z
  .object({
    answers: z.array(z.string().min(5)),
    time: z.string().time(),
  })
  .strict();

export const createQuizSchema = z
  .object({
    name: z.string().min(5),
    description: z.string().min(5),
    questions: z.array(questionSchema).nonempty(),
    complections: z.array(completionSchema),
  })
  .strict();

export const updateQuizSchema = createQuizSchema.partial();
