import { PageTitle } from "../../components/PageTitle";
import { NavBar } from "../../components/NavBar";

export const FitnessPage = () => {
	return (
		<section>
			<NavBar />
			<div className="page-content">
				<PageTitle text="Fitness" />
			</div>
		</section>
	);
};
