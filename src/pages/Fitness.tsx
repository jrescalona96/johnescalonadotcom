import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";

export const Fitness = () => {
	return (
		<section className="flex flex-col gap-2 p-8">
			<NavBar />
			<Header text="Fitness" />
		</section>
	);
};
