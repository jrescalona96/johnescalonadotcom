import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./screens/home/Home";
import { Contact } from "./screens/contact/Contact";
import { Interests } from "./screens/interests/Interests";

import "./App.css";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/interests" element={<Interests />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
