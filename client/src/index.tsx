import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

declare const __COMMIT_HASH__: string;

const meta = document.createElement("meta");
meta.name = "git-commit";
meta.content = __COMMIT_HASH__;
document.head.appendChild(meta);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
