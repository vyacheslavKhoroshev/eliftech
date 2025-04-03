import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./QuizCard.module.css";
import { IQuiz } from "../../types/data.type";
import { ROUTE } from "../../types/route.enum";
import { ACTION } from "../../types/action.enum";
import Button from "../UI/Button/Button";
import { useCatalogContext } from "../../hooks/useCatalogContext";
import { QuizService } from "../../API/QuizService";

const QuizCard: React.FC<{ quiz: IQuiz }> = ({ quiz }) => {
  const [actionsStatus, setActionStatus] = useState<boolean>(false);
  const { catalog, setCatalog } = useCatalogContext()!;
  const navigate = useNavigate();

  const editCard = () => {
    navigate(ROUTE.BUILDER, { state: quiz });
  };

  const runQuiz = () => {
    navigate(ROUTE.INTERACTIVE, { state: quiz });
  };

  const deleteCard = async () => {
    const updatedCatalog = catalog.filter((card) => card._id !== quiz._id);
    console.log(updatedCatalog);
    setCatalog(updatedCatalog);
    await QuizService.delete(quiz._id!);
  };

  return (
    <div className={styles.quiz_container}>
      <div className={styles.quiz_header}>
        <h2 className={styles.quiz_name}>{quiz.name}</h2>
        <input
          type="checkbox"
          checked={actionsStatus}
          onChange={() => setActionStatus((prev) => !prev)}
        />
      </div>
      <p className={styles.quiz_description}>{quiz.description}</p>
      <div className={styles.quiz_questions}>
        Questions: {quiz.questions.length}
      </div>
      <div className={styles.quiz_questions}>
        Completions: {quiz.complections?.length}
      </div>

      <div className={styles.actions}>
        <Button name={ACTION.EDIT} onClick={editCard} />
        <Button name={ACTION.RUN} onClick={runQuiz} />
        <Button name={ACTION.DELETE} onClick={deleteCard} />
      </div>
    </div>
  );
};

export default QuizCard;
