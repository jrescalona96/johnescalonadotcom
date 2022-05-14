import { Header } from "../../components/Header";
import { NavBar } from "../../components/NavBar";

export const FitnessPage = () => {
	return (
		<section>
			<NavBar />
			<div className="page-content">
				<Header text="Fitness" />
			</div>
		</section>
	);
};
