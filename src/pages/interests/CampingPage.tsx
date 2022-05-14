import { Header } from "../../components/Header";
import { NavBar } from "../../components/NavBar";

export const CampingPage = () => {
	return (
		<section>
			<NavBar />
			<div className="page-content">
				<Header text="Camping" />
			</div>
		</section>
	);
};
