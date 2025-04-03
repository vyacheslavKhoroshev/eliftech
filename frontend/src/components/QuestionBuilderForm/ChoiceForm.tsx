import React, { useState } from "react";
import Input from "../UI/Input/Input";
import { useQuestionContext } from "../../hooks/useQuestionContext";

const ChoiceForm: React.FC<{}> = () => {
  const { setQuestion } = useQuestionContext()!;
  const [newChoice, setNewChoice] = useState("");

  return (
    <>
      <Input
        placeholder="Enter choice"
        value={newChoice}
        onChange={(e) => setNewChoice(e.target.value)}
        onBlur={() => {
          setQuestion((prev) => {
            return { ...prev, choices: [...prev.choices, newChoice] };
          });
          setNewChoice("");
        }}
      />
    </>
  );
};

export default ChoiceForm;
