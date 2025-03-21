import { Dispatch, SetStateAction } from "react";
import { IComplection, IQuizCard } from "./data.type";

export type TCatalogContextProps = {
  catalog: IQuizCard[] | [];
  setCatalog: Dispatch<SetStateAction<IQuizCard[] | []>>;
  completions: IComplection[] | [];
  setCompletions: Dispatch<SetStateAction<IComplection[] | []>>;
};
