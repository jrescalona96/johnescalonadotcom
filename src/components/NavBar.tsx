import { useState } from "react";
import { TextLink } from "./TextLink";
import { Endpoints, ExtEndpoints } from "../assets/constants/Endpoints";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "../../node_modules/@fortawesome/free-solid-svg-icons/index";

import {
	faGithubSquare,
	faLinkedin,
	faInstagramSquare,
} from "../../node_modules/@fortawesome/free-brands-svg-icons/index";

export const NavBar = () => {
	return (
		<nav className="bg-white fixed w-screen z-10">
			<div
				id="nav-items"
				className="flex py-10 px-10 lg:px-52 mx-auto justify-between max-w-screen-xl">
				<NavItems />
				<SocialIcons />
			</div>
		</nav>
	);
};

const NavItems = () => {
	const [isCaretIconSelected, setIsCaretIconSelected] = useState(false);
	const handleSetCaretIcon = () => setIsCaretIconSelected(!isCaretIconSelected);

	const classes: string = "";
	const isActive = (path: string): string => {
		const activeDecorationClass: string = " underline";
		return window.location.pathname.includes(path) ? activeDecorationClass : "";
	};

	return (
		<div className="flex gap-x-4">
			<TextLink className={classes} href={Endpoints.home} text="jre" />
			<TextLink
				className={classes + isActive(Endpoints.projects)}
				href={Endpoints.projects}
				text="projects"
			/>
			<TextLink
				className={classes + isActive(Endpoints.resume)}
				href={Endpoints.resume}
				text="resume"
			/>
			{/* <div className="flex gap-x-4">
				<TextLink
					text="interests"
					className={classes + isActive(Endpoints.interests)}
					href={Endpoints.interests}
				/>
				<div
					className={`flex gap-x-4 ${isCaretIconSelected ? "" : "hidden"}`}
					onMouseLeave={handleSetCaretIcon}>
					<TextLink
						text="fitness"
						className={classes + isActive(Endpoints.interests)}
						href={Endpoints.interests}
					/>
					<TextLink
						text="camping"
						className={classes + isActive(Endpoints.interests)}
						href={Endpoints.interests}
					/>
					<TextLink
						text="coffee"
						className={classes + isActive(Endpoints.interests)}
						href={Endpoints.interests}
					/>
				</div>
				<FontAwesomeIcon
					className={`p-1 ${!isCaretIconSelected ? "" : "hidden"}`}
					icon={faCaretRight}
					onMouseOver={handleSetCaretIcon}
				/>
			</div> */}
		</div>
	);
};

const SocialIcons = () => {
	const socialIconClasses: string =
		"transition ease-in-out delay-80 hover:scale-125 duration-300 text-2xl";
	return (
		<div id="social-media-links" className="flex gap-x-4">
			<a href={ExtEndpoints.github}>
				<FontAwesomeIcon icon={faGithubSquare} className={socialIconClasses} />
			</a>
			<a href={ExtEndpoints.linkedin}>
				<FontAwesomeIcon icon={faLinkedin} className={socialIconClasses} />
			</a>
			<a href={ExtEndpoints.instagram}>
				<FontAwesomeIcon
					icon={faInstagramSquare}
					className={socialIconClasses}
				/>
			</a>
		</div>
	);
};
