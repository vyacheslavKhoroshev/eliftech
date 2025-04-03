import { INPUT_TYPE } from "../../../types/input.type";
import { QUESTION_TYPE } from "../../../types/questionType.enum";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import { useCatalogContext } from "../../../hooks/useCatalogContext";
import { IAnswer, IComplection, IQuiz } from "../../../types/data.type";
import styles from "./InteractiveFrom.module.css";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const InteractiveForm: React.FC<{
  setComplete: (arg0: boolean) => void;
  quiz: IQuiz;
}> = ({ setComplete, quiz }) => {
  const { register, handleSubmit } = useForm();
  const { setCatalog, setCompletions } = useCatalogContext()!;

  const setCompletionsAmount = () => {
    setCatalog((prev) => {
      const updatedCatalog = prev;
      const index = updatedCatalog.findIndex((card) => card._id === quiz._id);
      updatedCatalog[index].completionsAmount =
        updatedCatalog[index].completionsAmount + 1;
      return updatedCatalog;
    });
  };

  const onSubmit: SubmitHandler<FieldValues> = (e: any) => {
    const completion: IComplection = {
      answers: e,
      time: "01:01:01",
    };
    setComplete(true);
    setCompletionsAmount();
    setCompletions((prev) => [...prev, completion]);
    console.log(completion, "completion");
  };

  return (
    <form
      className={styles.interactive_container}
      onSubmit={handleSubmit(onSubmit)}
    >
      {quiz.questions.map((question, i) => (
        <div key={i - 1} className={styles.question_interactive_form_container}>
          <label key={i}>{i}</label>
          <label key={i + 1}>{question.question}:</label>

          {question.choices.length ? (
            question.choices!.map((choise, index) => {
              return (
                <Input
                  id={question._id}
                  type={
                    question.type === QUESTION_TYPE.MULTIPLE_CHOISE
                      ? INPUT_TYPE.CHECKBOX
                      : INPUT_TYPE.RADIO
                  }
                  key={index}
                  labelname={choise}
                  {...register(question.question)}
                />
              );
            })
          ) : (
            <Input
              id={question._id}
              key={question._id}
              {...register(question.question)}
            />
          )}
        </div>
      ))}

      <Button name="submit" />
    </form>
  );
};

export default InteractiveForm;
