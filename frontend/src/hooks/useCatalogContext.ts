import { useContext } from "react";
import { CatalogContext } from "../context/CatalogContext";

export const useCatalogContext = () => {
  const catalogContext = useContext(CatalogContext);
  return catalogContext;
};
