import { createContext, Dispatch, SetStateAction } from "react";
import { IQuestion } from "../types/data.type";

interface IQuestinContext {
  question: IQuestion;
  setQuestion: Dispatch<SetStateAction<IQuestion>>;
}

export const QuestionContext = createContext<IQuestinContext | null>(null);
