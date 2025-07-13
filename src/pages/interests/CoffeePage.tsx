import { PageTitle } from "../../components/PageTitle";
import { NavBar } from "../../components/NavBar";

export const CoffeePage = () => {
	return (
		<section>
			<NavBar />
			<div className="page-content">
				<PageTitle text="Coffee" />
			</div>
		</section>
	);
};
