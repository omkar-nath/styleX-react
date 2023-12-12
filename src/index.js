import React from "react";
import { createRoot } from "react-dom/client";
const container = document.getElementById("app");
import App from "./App";
const root = createRoot(container);

// createRoot(container!) if you use TypeScript
root.render(<App />);
