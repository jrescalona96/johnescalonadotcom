import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Endpoints } from "./assets/constants/Endpoints";
import { InterestsPage } from "./pages/interests";
import { ProjectsPage } from "./pages/ProjectsPage";
import { CoffeePage } from "./pages/interests/CoffeePage";
import { FitnessPage } from "./pages/interests/FitnessPage";
import { CampingPage } from "./pages/interests/CampingPage";

import "./App.css";
import { ResumePage } from "./pages/Resume";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path={Endpoints.home} element={<HomePage />} />
					<Route path={Endpoints.projects} element={<ProjectsPage />} />
					<Route path={Endpoints.interests} element={<InterestsPage />} />
					<Route path={Endpoints.coffee} element={<CoffeePage />} />
					<Route path={Endpoints.fitness} element={<FitnessPage />} />
					<Route path={Endpoints.camping} element={<CampingPage />} />
					<Route path={Endpoints.resume} element={<ResumePage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
