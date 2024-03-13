import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";

import App from "./Pages/App";
import { About } from "./Pages/About";
import { Income } from "./Pages/Income";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/incomes/:incomeId",
    element: <Income />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />

  // <React.StrictMode>
  // </React.StrictMode>,
);
