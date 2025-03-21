import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./AppRouter/routes";
import { CatalogContextComponent } from "./context/CatalogContext";

const App = () => {
  const router = createBrowserRouter(routes);

  return (
    <CatalogContextComponent>
      <RouterProvider router={router} />
    </CatalogContextComponent>
  );
};

export default App;
