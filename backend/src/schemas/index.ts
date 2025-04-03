import { model } from "mongoose";

import { IQuiz } from "../types/quiz.type";
import { ITest } from "../types/test.type";
import { TestSchema } from "./test.schema";
import { QuizSchema } from "./quiz.schema";
import { IComplection } from "../types/complection.type";
import { ComplectionSchema } from "./complection.schema";

const TestModel = model<ITest>("Test", TestSchema);
const QuizModel = model<IQuiz>("Quiz", QuizSchema);
const ComplectionModel = model<IComplection>("Complection", ComplectionSchema);

export { ComplectionModel, QuizModel, TestModel };
