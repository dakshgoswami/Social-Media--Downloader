import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { DataContextProvider } from "./Context/DataContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <DataContextProvider>
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </DataContextProvider>
);
