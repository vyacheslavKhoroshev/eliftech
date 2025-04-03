import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { IComplection, IQuiz } from "../types/data.type";
import { InitQuiz } from "./initBuilders";

export interface ICatalogContext {
  catalog: IQuiz[];
  setCatalog: Dispatch<SetStateAction<IQuiz[]>>;

  completions: IComplection[] | [];
  setCompletions: Dispatch<SetStateAction<IComplection[] | []>>;
}

const CatalogContext = createContext<ICatalogContext | undefined>(undefined);

const CatalogContextComponent: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [catalog, setCatalog] = useState<IQuiz[]>([new InitQuiz()]);
  const [completions, setCompletions] = useState<IComplection[]>([]);

  return (
    <CatalogContext.Provider
      value={{
        catalog,
        setCatalog,
        completions,
        setCompletions,
      }}
    >
      {children}
    </CatalogContext.Provider>
  );
};

export { CatalogContext, CatalogContextComponent };
