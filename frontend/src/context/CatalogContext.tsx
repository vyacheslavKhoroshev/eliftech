import React, { createContext, ReactNode, useEffect, useState } from "react";
import { IComplection, IQuizCard } from "../types/data.type";
import { TCatalogContextProps } from "../types/catalog.context.props";
import { mockData } from "../mockData";

const CatalogContext = createContext<TCatalogContextProps | undefined>(
  undefined
);

const CatalogContextComponent: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [catalog, setCatalog] = useState<IQuizCard[]>(mockData);
  const [completions, setCompletions] = useState<IComplection[]>([]);

  useEffect(() => {}, []);

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
