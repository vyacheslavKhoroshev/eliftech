import { useContext } from "react";
import { QuestionContext } from "../context/QuestionContext";

export const useQuestionContext = () => {
  const questionContext = useContext(QuestionContext);
  return questionContext;
};
