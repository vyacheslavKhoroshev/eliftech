import { Router } from "express";

import { validateSchema } from "../middlewares/validation.middleware";
import {
  createQuizSchema,
  updateQuizSchema,
} from "../middlewares/quiz.validation";
import { QuizController } from "../controllers/quiz.controller";

const quizRoute = Router();

quizRoute.get("", QuizController.getAll);
quizRoute.get("/:id", QuizController.getById);
quizRoute.delete("/:id", QuizController.delete);
quizRoute.post("", validateSchema(createQuizSchema), QuizController.create);
quizRoute.patch(
  "/:id",
  validateSchema(updateQuizSchema),
  QuizController.update
);

export default quizRoute;
