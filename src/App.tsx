import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Endpoints } from "./assets/constants/endpoints";
import { HomePage } from "./pages/HomePage";
import { ContactPage } from "./pages/ContactPage";
import { InterestsPage } from "./pages/interests";
import { ProjectsPage } from "./pages/ProjectsPage";
import { CoffeePage } from "./pages/interests/CoffeePage";
import { FitnessPage } from "./pages/interests/FitnessPage";
import { CampingPage } from "./pages/interests/CampingPage";

import "./App.css";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path={Endpoints.home} element={<HomePage />} />
					<Route path={Endpoints.projects} element={<ProjectsPage />} />
					<Route path={Endpoints.contact} element={<ContactPage />} />
					<Route path={Endpoints.interests} element={<InterestsPage />} />
					<Route path={Endpoints.coffee} element={<CoffeePage />} />
					<Route path={Endpoints.fitness} element={<FitnessPage />} />
					<Route path={Endpoints.camping} element={<CampingPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
