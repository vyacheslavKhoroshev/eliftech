import React, { useState } from "react";
import styles from "./Builder.module.css";
import { QUESTION_TYPE } from "../../../types/questionType.enum";
import Input from "../../../components/UI/Input/Input";
import Button from "../../../components/UI/Button/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTE } from "../../../types/route.enum";
import { useCatalogContext } from "../../../hooks/useCatalogContext";
import QuestionBuilderForm from "../../../components/QuestionBuilderForm/QuestionBuilderForm";
import { IQuestion, IQuizCard } from "../../../types/data.type";

class DefaultQuestion implements IQuestion {
  id: string;
  question: string;
  type: string;
  choices: (string | number)[];

  constructor() {
    this.id = crypto.randomUUID();
    this.question = "";
    this.type = QUESTION_TYPE.TEXT;
    this.choices = [];
  }
}

const Builder: React.FC = () => {
  const state = useLocation().state as IQuizCard;
  const navigation = useNavigate();
  const { setCatalog } = useCatalogContext()!;

  const [name, setName] = useState<string>(state ? state.name : "");
  const [description, setDescription] = useState<string>(
    state ? state.description : ""
  );
  const [questions, setQuestions] = useState<IQuestion[]>(
    state ? state.questions : [new DefaultQuestion()]
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const qiuzCard: IQuizCard = {
      id: crypto.randomUUID(),
      name,
      description,
      questions,
      questionsAmount: questions.length,
      completionsAmount: 0,
    };

    const updateCard = () => {
      setCatalog((prev) => {
        const catalog = prev;
        const index = prev.findIndex((card) => card.id === state.id);
        catalog[index] = qiuzCard;
        return catalog;
      });
    };

    const addCard = () => {
      setCatalog((prev) => [...prev, qiuzCard]);
    };

    state ? updateCard() : addCard();

    navigation(ROUTE.CATALOG);
  };

  return (
    <div className={styles.builder_container}>
      <h2>Create Quiz</h2>
      <form className={styles.builder_form} onSubmit={onSubmit}>
        <Input
          value={name}
          type="text"
          labelname="quiz name"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          value={description}
          type="text"
          labelname="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        {questions.map((question, i) => (
          <QuestionBuilderForm
            number={i + 1}
            key={question.id}
            question={question}
            setQuestions={(question) => {
              const index = questions.findIndex((q) => q.id === question.id);
              const newQuestions = questions;
              newQuestions[index] = question;
              setQuestions(newQuestions);
            }}
            removeQuestion={(id) =>
              setQuestions((prev) => {
                const updatedQuestions = prev.filter((q) => q.id !== id);
                return updatedQuestions;
              })
            }
          />
        ))}

        <Button
          name="add question"
          onClick={(e) => {
            e.preventDefault();
            setQuestions([...questions, new DefaultQuestion()]);
          }}
        />
        <Button name="save quiz" type="submit" />
      </form>
    </div>
  );
};

export default Builder;
