import { z, ZodType } from "zod";
import { IAnswer, IComplection } from "../types/complection.type";
import { ObjectId } from "mongodb";

export const ComplectionValidateSchema = z
  .object({
    quizId: z.string(),
    answers: z.array(z.object({})),
    time: z.string().time(),
  })
  .strict() satisfies ZodType<IComplection>;

export const ComplectionUpdateValidateSchema =
  ComplectionValidateSchema.partial();
