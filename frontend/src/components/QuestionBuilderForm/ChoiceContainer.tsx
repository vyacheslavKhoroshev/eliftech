import React from "react";
import styles from "./QuestionBuilderForm.module.css";
import ChoiceForm from "./ChoiceForm";
import ChoiceCard from "./ChoiceCard";
import { useQuestionContext } from "../../hooks/useQuestionContext";

const ChoiceContainer: React.FC = () => {
  const { question } = useQuestionContext()!;
  return (
    <div className={styles.choice_container}>
      <ChoiceForm />
      <div className={styles.choice_card_container}>
        {question.choices.map((choice, i) => (
          <ChoiceCard key={i} value={choice} />
        ))}
      </div>
    </div>
  );
};

export default ChoiceContainer;
