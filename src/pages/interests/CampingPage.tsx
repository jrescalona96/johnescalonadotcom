import { PageTitle } from "../../components/PageTitle";
import { NavBar } from "../../components/NavBar";

export const CampingPage = () => {
	return (
		<section>
			<NavBar />
			<div className="page-content">
				<PageTitle text="Camping" />
			</div>
		</section>
	);
};
