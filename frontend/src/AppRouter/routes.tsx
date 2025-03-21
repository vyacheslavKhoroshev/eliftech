import { ROUTE } from "../types/route.enum";
import Builder from "./pages/Builder/Builder";
import Catalog from "./pages/Catalog/Catalog";
import Interactive from "./pages/Interactive/Interactive";

export const routes = [
  { path: ROUTE.CATALOG, element: <Catalog /> },
  { path: ROUTE.BUILDER, element: <Builder /> },
  { path: ROUTE.INTERACTIVE, element: <Interactive /> },
];
