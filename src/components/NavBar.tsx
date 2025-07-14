import { useState, use, useTransition } from "react";
import { TextLink } from "./TextLink";
import { Endpoints, ExtEndpoints } from "../assets/constants/AppUrls";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCaretRight,
	faFileDownload,
	faPrint,
} from "../../node_modules/@fortawesome/free-solid-svg-icons/index";
import {
	faGithubSquare,
	faLinkedin,
	faInstagramSquare,
} from "../../node_modules/@fortawesome/free-brands-svg-icons/index";
import { RoundedButton } from "./RoundedButton";

export const NavBar = () => {
	return (
		<nav className="bg-white fixed w-screen z-10">
			<div
				id="nav-items"
				className="flex py-10 px-5 sm:px-10 lg:px-52 mx-auto justify-between max-w-screen-xl">
				<NavItems />
				<NavActionItems />
			</div>
		</nav>
	);
};

const NavItems = () => {
	const [isCaretIconSelected, setIsCaretIconSelected] = useState(false);
	
	// React 19: Using useTransition for better UX
	const [isPending, startTransition] = useTransition();
	
	const handleSetCaretIcon = () => {
		startTransition(() => {
			setIsCaretIconSelected(!isCaretIconSelected);
		});
	};

	const classes: string = "";
	const isActive = (path: string): string => {
		const activeDecorationClass: string = " border-b-2 border-blue-600";
		return window.location.pathname.includes(path) ? activeDecorationClass : "";
	};

	return (
		<div className="flex gap-x-4 ">
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
			{/* <TextLink
				text="camping"
				className={classes + isActive(Endpoints.camping)}
				href={Endpoints.camping}
			/> */}
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

const NavActionItems = () => {
	const socialIconClasses: string =
		"transition ease-in-out delay-80 hover:scale-125 duration-300 text-2xl pt-1";
	return (
		<div
			id="social-media-links"
			className="flex gap-x-2 md:gap-x-4 items-center">
			{window.location.pathname.includes("resume") && (
				<div title="View downloadable PDF">
					<FontAwesomeIcon
						className="transition ease-in-out delay-80 hover:scale-125 duration-300 text-xl pt-1"
						icon={faPrint}
						onClick={() => window.open(Endpoints.download_resume, "_blank")}
					/>
				</div>
			)}
			<a href={ExtEndpoints.github} title="GitHub">
				<FontAwesomeIcon icon={faGithubSquare} className={socialIconClasses} />
			</a>
			<a href={ExtEndpoints.linkedin} title="LinkedIn">
				<FontAwesomeIcon icon={faLinkedin} className={socialIconClasses} />
			</a>
			<a href={ExtEndpoints.instagram} title="Instagram">
				<FontAwesomeIcon
					icon={faInstagramSquare}
					className={socialIconClasses}
				/>
			</a>
		</div>
	);
};
