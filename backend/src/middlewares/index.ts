import { ComplectionValidateSchema } from "./complection.validation";
import { QuestionValidateSchema } from "./question.validation";
import {
  QuizValidateSchema,
  QuizValidateUpdateSchema,
} from "./quiz.validation";
import { validateSchema } from "./validation.middleware";

export default {
  validateSchema,
  QuestionValidateSchema,
  ComplectionValidateSchema,
  QuizValidateSchema,
  QuizValidateUpdateSchema,
};
