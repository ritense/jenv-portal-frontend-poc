import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./constants/routes";

const router = createBrowserRouter([
  {
    element: <App />,
    children: routes,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
