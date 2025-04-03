import { Router } from "express";

import { validateSchema } from "../middlewares/validation.middleware";

import { QuizController } from "../controllers/quiz.controller";
import {
  QuizValidateSchema,
  QuizValidateUpdateSchema,
} from "../middlewares/quiz.validation";

const quizRoute = Router();

quizRoute.get("", QuizController.getAll);
quizRoute.get("/:id", QuizController.getById);
quizRoute.delete("/:id", QuizController.delete);
quizRoute.post("", validateSchema(QuizValidateSchema), QuizController.create);
quizRoute.patch(
  "/:id",
  validateSchema(QuizValidateUpdateSchema),
  QuizController.update
);

export default quizRoute;
