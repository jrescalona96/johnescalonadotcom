import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";

export const ContactPage = () => {
	return (
		<section>
			<NavBar />
			<div className="page-content">
				<Header text="Contact me" />{" "}
			</div>
		</section>
	);
};
