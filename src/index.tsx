import React from "react";
import { createRoot } from "react-dom/client";
import SettingsPage from "./SettingsPage";

const container = document.getElementById("root");
if (!container) throw new Error("Root element not found");
createRoot(container).render(
  <React.StrictMode>
    <SettingsPage />
  </React.StrictMode>
);
