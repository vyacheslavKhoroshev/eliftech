import React, { useState } from "react";
import styles from "./Interactive.module.css";
import { useLocation } from "react-router-dom";
import { IQuizCard } from "../../../types/data.type";
import InteractiveResults from "../../../components/InteractiveComponents/InteractiveResult/InteractiveResult";
import InteractiveForm from "../../../components/InteractiveComponents/InteractiveForm/InteractiveForm";

const Interactive: React.FC = () => {
  const quiz = useLocation().state as IQuizCard;
  const [complete, setComplete] = useState<boolean>(false);

  return (
    <div>
      <div className={styles.interactive_header}>
        <h2>Interactive: {quiz.name}</h2>
        <p>{quiz.description}</p>
      </div>
      {complete ? (
        <InteractiveResults />
      ) : (
        <InteractiveForm setComplete={setComplete} quiz={quiz} />
      )}
    </div>
  );
};

export default Interactive;
