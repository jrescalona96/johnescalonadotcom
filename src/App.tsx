import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ResumePage } from "./pages/ResumePage";
import { Endpoints } from "./assets/constants/AppUrls";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { NavBar } from "./components/layout/NavBar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path={Endpoints.home} element={<HomePage />} />
            <Route path={Endpoints.projects} element={<ProjectsPage />} />
            <Route path={Endpoints.resume} element={<ResumePage />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
}

export default App;
