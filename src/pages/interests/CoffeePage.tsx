import { Header } from "../../components/Header";
import { NavBar } from "../../components/NavBar";

export const CoffeePage = () => {
	return (
		<section>
			<NavBar />
			<div className="page-content">
				<Header text="Coffee" />
			</div>
		</section>
	);
};
