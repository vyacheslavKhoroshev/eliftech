import React, { useEffect } from "react";
import styles from "./Catalog.module.css";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../../types/route.enum";
import QuizCard from "../../../components/QuizCard/QuizCard";
import Button from "../../../components/UI/Button/Button";
import { useCatalogContext } from "../../../hooks/useCatalogContext";
import { QuizService } from "../../../API/QuizService";

const Catalog: React.FC = () => {
  const { catalog, setCatalog } = useCatalogContext()!;

  useEffect(() => {
    catalog.length === 0 &&
      QuizService.getAll().then((data) => setCatalog(data!));
  }, []);

  const navigate = useNavigate();
  return (
    <div className={styles.catalog_container}>
      <h1 className={styles.catalog_header}>
        Quiz catalog
        <Button name="Create Quiz" onClick={() => navigate(ROUTE.BUILDER)} />
      </h1>
      <div className={styles.quizes_container}>
        {catalog.map((quiz) => (
          <QuizCard quiz={quiz} key={quiz._id} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
