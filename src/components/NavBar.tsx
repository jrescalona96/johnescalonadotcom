import { TextLink } from "./TextLink";
import { Endpoints } from "../assets/constants/endpoints";

export const NavBar = () => {
	const classes: string = "";
	const isActive = (path: string): string => {
		const activeDecorationClass: string = " underline";
		return window.location.pathname.includes(path) ? activeDecorationClass : "";
	};

	return (
		<nav className="bg-white fixed w-screen">
			<div className="py-5 px-10 lg:px-40 flex flex-row gap-x-2 max-w-screen-xl mx-auto">
				<TextLink className={classes} href={Endpoints.home} text="jre" />
				<TextLink
					className={classes + isActive(Endpoints.projects)}
					href={Endpoints.projects}
					text="projects"
				/>
				<TextLink
					className={classes + isActive(Endpoints.contact)}
					href={Endpoints.contact}
					text="contact"
				/>
				<TextLink
					text="interests"
					className={classes + isActive(Endpoints.interests)}
					href={Endpoints.interests}
				/>
			</div>
		</nav>
	);
};
