import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Endpoints } from "./assets/constants/endpoints";
import { HomePage } from "./pages/HomePage";
import { ContactPage } from "./pages/ContactPage";
import { InterestsPage } from "./pages/InterestsPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { CoffeePage } from "./pages/CoffeePage";
import { FitnessPage } from "./pages/FitnessPage";
import { CampingPage } from "./pages/CampingPage";

import "./App.css";

function App() {
	return (
		<div className="App container h-screen my-auto mx-auto max-w-4xl">
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
