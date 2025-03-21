import React, { useRef, useState } from "react";
import styles from "./QuestionBuilderForm.module.css";
import { QUESTION_TYPE } from "../../types/questionType.enum";
import { IQuestion } from "../../types/data.type";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import Select from "../UI/Select/Select";
import { INPUT_TYPE } from "../../types/input.type";

const QuestionBuilderForm: React.FC<{
  number: number;
  question: IQuestion;
  setQuestions: (q: IQuestion) => void;
  removeQuestion: (id: string) => void;
}> = ({ number, question, setQuestions, removeQuestion }) => {
  const [inputs, setInputs] = useState<IQuestion>({
    id: question.id,
    question: question.question,
    type: question.type,
    choices: question.choices,
  });
  const inputRef = useRef<HTMLInputElement>(null);

  const questionTypes = Object.values(QUESTION_TYPE);

  const Choices: React.FC = () => {
    return (
      <div className={styles.choices_container}>
        <Input
          type={INPUT_TYPE.TEXT}
          ref={inputRef}
          placeholder="Enter choice"
          onBlur={(e) => {
            setInputs({
              ...inputs,
              choices: [...inputs.choices!, e.target.value],
            });
            setQuestions(inputs);
          }}
        />

        <div className={styles.choices_container}>
          {inputs.choices.map((choice, i) => {
            return (
              <Input
                value={choice}
                type={INPUT_TYPE.TEXT}
                key={i}
                onChange={(e) => {
                  setInputs({
                    ...inputs,
                    choices: [...inputs.choices!, e.target.value],
                  });
                }}
                onBlur={() => {
                  setQuestions(inputs);
                }}
              />
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className={styles.question_form}>
      <label>{number}</label>
      <div className={styles.question_container}>
        <Input
          value={inputs.question}
          type={INPUT_TYPE.TEXT}
          labelname="question"
          onChange={(e) => {
            setInputs({ ...inputs, question: e.target.value });
          }}
          onBlur={() => {
            setQuestions(inputs);
          }}
        />
        <Select
          value={inputs.type}
          label="type"
          options={questionTypes}
          onChange={(e) => {
            const updatedInputs = { ...inputs, type: e.target.value };
            setInputs(updatedInputs);
            setQuestions(updatedInputs);
          }}
        />
        <Button
          name="remove"
          onClick={(e) => {
            e.preventDefault();
            removeQuestion(question.id);
          }}
        />
      </div>
      {inputs.type !== QUESTION_TYPE.TEXT && <Choices />}
    </div>
  );
};

export default QuestionBuilderForm;
