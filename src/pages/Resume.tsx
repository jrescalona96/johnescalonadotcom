import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";

export const ResumePage = () => {
	return (
		<section>
			<NavBar />
			<div className="page-content">
				<Header text="Resume" />
				<Document file="John_Escalona_Resume.pdf" onLoadError={console.error} />
			</div>
		</section>
	);
};
