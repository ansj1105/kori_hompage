import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./app/routes";
import { LanguageProvider } from "./app/contexts/LanguageContext";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <LanguageProvider>
    <RouterProvider router={router} />
  </LanguageProvider>
);
