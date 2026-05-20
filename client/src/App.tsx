import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ResumePage } from "./pages/ResumePage";
import { Endpoints } from "./assets/constants/AppUrls";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { Layout } from "./components/layout/Layout";

import "./App.css";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path={Endpoints.home} element={<HomePage />} />
              <Route path={Endpoints.projects} element={<ProjectsPage />} />
              <Route path={Endpoints.resume} element={<ResumePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
}

export default App;
