import React, { useState } from "react";
import Input, { InputChangeEventType } from "../UI/Input/Input";
import style from "./QuestionBuilderForm.module.css";
import { useHandleOnChange, useQuestionContext } from "../../hooks";

const ChoiceCard: React.FC<{
  value: string | number;
}> = ({ value }) => {
  const [onEdit, setOnEdit] = useState(false);
  const { question, setQuestion } = useQuestionContext()!;
  const index = question.choices.indexOf(value);

  const handleOnChange = (e: InputChangeEventType) =>
    useHandleOnChange(e, setQuestion);

  return (
    <div className={style.choice_card}>
      <div onClick={() => setOnEdit((prev) => !prev)}>{value}</div>
      {onEdit && (
        <Input
          value={value}
          name="choices"
          onChange={(e) => {
            setQuestion((prev) => {
              const newChoices = prev.choices;
              newChoices[index] = e.target.value;

              return { ...prev, choices: newChoices };
            });
          }}
          onBlur={() => setOnEdit((prev) => !prev)}
          autoFocus={true}
          nestedType="array"
        />
      )}
    </div>
  );
};

export default ChoiceCard;
