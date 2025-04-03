import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Builder.module.css";
import Input from "../../../components/UI/Input/Input";
import Button from "../../../components/UI/Button/Button";
import { InputChangeEventType } from "../../../components/UI/Input/Input";
import { ROUTE } from "../../../types/route.enum";
import { IQuestion, IQuiz } from "../../../types/data.type";
import QuestionBuilderForm from "../../../components/QuestionBuilderForm/QuestionBuilderForm";
import { useCatalogContext, useHandleOnChange } from "../../../hooks";
import { InitQuestion, InitQuiz } from "../../../context/initBuilders";

const Builder: React.FC = () => {
  const state = useLocation().state as IQuiz;
  const navigation = useNavigate();
  const { setCatalog } = useCatalogContext()!;
  const [quiz, setQuiz] = useState(state ? state : new InitQuiz())!;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("bifs");
    const updateCard = async () => {};
    const createCard = async () => {
      setCatalog((prev) => [...prev, quiz]);
    };
    state ? updateCard() : createCard();
    navigation(ROUTE.CATALOG);
  };

  const addQuestion = () =>
    setQuiz((prev) => {
      return { ...prev, questions: [...prev.questions, new InitQuestion()] };
    });

  const updateQuestion = (question: IQuestion) => {
    setQuiz((prev) => {
      const index = prev.questions.findIndex((q) => q._id === question._id);

      const updatedQuestions = prev.questions;
      updatedQuestions[index] = question;
      return { ...prev, questions: updatedQuestions };
    });
  };
  const removeQuestion = (_id: string) => {
    setQuiz((prev) => {
      const updatedQuestions = prev.questions.filter(
        (question) => question._id !== _id
      );
      return { ...prev, questions: updatedQuestions };
    });
  };

  const handleOnChange = (e: InputChangeEventType) =>
    useHandleOnChange(e, setQuiz);

  return (
    <div className={styles.builder_container}>
      <h2>Create Quiz</h2>
      <form className={styles.builder_form} onSubmit={onSubmit}>
        <Input
          value={quiz.name}
          name="name"
          labelname="quiz name"
          onChange={handleOnChange}
        />
        <Input
          value={quiz.description}
          name="description"
          labelname="description"
          onChange={handleOnChange}
        />
        {quiz.questions.map((question, i) => (
          <QuestionBuilderForm
            number={i + 1}
            key={question._id}
            data={question}
            remove={removeQuestion}
            update={updateQuestion}
          />
        ))}

        <Button name="add question" type="button" onClick={addQuestion} />
        <Button name="save quiz" type="submit" />
      </form>
    </div>
  );
};

export default Builder;
