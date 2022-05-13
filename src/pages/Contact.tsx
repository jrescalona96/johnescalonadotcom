import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";

export const Contact = () => {
	return (
		<section className="flex flex-col gap-2 p-8">
			<NavBar />
			<Header text="Contact me" />
		</section>
	);
};
