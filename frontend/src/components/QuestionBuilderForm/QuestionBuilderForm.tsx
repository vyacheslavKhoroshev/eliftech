import React, { useState } from "react";
import styles from "./QuestionBuilderForm.module.css";
import { QUESTION_TYPE } from "../../types/questionType.enum";
import Input, { InputChangeEventType } from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import Select, { SelectChangeEventType } from "../UI/Select/Select";
import { IQuestion } from "../../types/data.type";
import { useHandleOnChange } from "../../hooks/useHandleOnChange";
import ChoiceContainer from "./ChoiceContainer";
import { QuestionContext } from "../../context/QuestionContext";

const QuestionBuilderForm: React.FC<{
  number: number;
  data: IQuestion;
  remove: (_id: string) => void;
  update: (question: IQuestion) => void;
}> = ({ number, data, remove, update }) => {
  const [question, setQuestion] = useState<IQuestion>(data);

  const handleOnChange = (e: InputChangeEventType | SelectChangeEventType) =>
    useHandleOnChange(e, setQuestion);

  return (
    <QuestionContext.Provider value={{ question, setQuestion }}>
      <div className={styles.question_form}>
        <div
          className={styles.question_container}
          onBlur={() => {
            update(question);
          }}
        >
          <div className={styles.question}>
            <label className={styles.question_count}>{number}.</label>
            <Input
              labelname="question"
              value={question.question}
              name="question"
              onChange={handleOnChange}
            />
            <Select
              name="type"
              value={question.type}
              label="type"
              options={Object.values(QUESTION_TYPE)}
              onChange={handleOnChange}
            />
            <Button
              name="remove"
              type="button"
              onClick={() => {
                remove(question._id);
              }}
            />
          </div>
          {question.type !== QUESTION_TYPE.TEXT && <ChoiceContainer />}
        </div>
      </div>
    </QuestionContext.Provider>
  );
};

export default QuestionBuilderForm;
