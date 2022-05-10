import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StringConstants as Strings } from "./assets/constants/StringConstants";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Interests } from "./pages/Interests";
import { Projects } from "./pages/Projects";
import { Coffee } from "./pages/Coffee";
import { Fitness } from "./pages/Fitness";
import { Nature } from "./pages/Nature";

import "./App.css";

function App() {
	return (
		<div className="App container h-screen my-auto mx-auto max-w-4xl">
			<BrowserRouter>
				<Routes>
					<Route path={Strings.HOME_PATH} element={<Home />} />
					<Route path={Strings.CONTACT_PATH} element={<Contact />} />
					<Route path={Strings.INTERESTS_PATH} element={<Interests />} />
					<Route
						path={Strings.INTERESTS_PATH + Strings.COFFEE_PATH}
						element={<Coffee />}
					/>
					<Route
						path={Strings.INTERESTS_PATH + Strings.FITNESS_PATH}
						element={<Fitness />}
					/>
					<Route
						path={Strings.INTERESTS_PATH + Strings.NATURE_PATH}
						element={<Nature />}
					/>
					<Route path={Strings.PROJECTS_PATH} element={<Projects />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
