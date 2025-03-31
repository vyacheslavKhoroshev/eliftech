import { BaseController } from "./base.controller";
import { QuizSchema } from "../schemas/quiz.schema";

class QuizControllerClass extends BaseController {}

export const QuizController = new QuizControllerClass(QuizSchema);
