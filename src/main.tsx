import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { paths } from "./components/rout";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={paths} />
  </StrictMode>
);
