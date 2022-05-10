import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Endpoints } from "./assets/constants/endpoints";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Interests } from "./pages/Interests";
import { Projects } from "./pages/Projects";
import { Coffee } from "./pages/Coffee";
import { Fitness } from "./pages/Fitness";
import { Camping } from "./pages/Camping";

import "./App.css";

function App() {
	return (
		<div className="App container h-screen my-auto mx-auto max-w-4xl">
			<BrowserRouter>
				<Routes>
					<Route path={Endpoints.home} element={<Home />} />
					<Route path={Endpoints.projects} element={<Projects />} />
					<Route path={Endpoints.contact} element={<Contact />} />
					<Route path={Endpoints.interests} element={<Interests />} />
					<Route path={Endpoints.coffee} element={<Coffee />} />
					<Route path={Endpoints.fitness} element={<Fitness />} />
					<Route path={Endpoints.camping} element={<Camping />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
