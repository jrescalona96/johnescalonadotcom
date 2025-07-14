import { useMemo } from "react";
import { TextLink } from "../components/TextLink";
import { NavBar } from "../components/NavBar";
import { Endpoints, ExtEndpoints } from "../assets/constants/AppUrls";
import { Footer } from "../components/Footer";

export const HomePage = () => {
	return (
		<section>
			<NavBar />
			<div className="justify-center items-center page-content">
				<div className="transform flex flex-col sm:flex-row align-baseline gap-x-8">
					<Introduction />
					<ProfilePic />
				</div>
			</div>
			<Footer />
		</section>
	);
};

const ProfilePic = () => {
	return (
		<div className="sm:basis-1/2 my-auto flex justify-end">
			<img
				id="profile-pic"
				src="./images/john_escalona_desktop.jpg"
				alt=""
				className="rounded-lg my-auto"
			/>
		</div>
	);
};

const Introduction = () => {
	// React 19: Using useMemo for performance optimization
	const yearsExperience = useMemo(() => {
		return new Date().getFullYear() - 2021;
	}, []);

	return (
		<div className="sm:basis-3/4">
			<h1 className="font-bold text-7xl">Hi. I'm John!</h1>
			<div className="flex flex-col md:flex-row gap-5 pt-5">
				<div
					id="welcomeMessage"
					className="flex flex-col gap-y-5 justify-end font-light pt-6 pb-3">
					<div>
						{" I currently a "}
						<TextLink href="/projects" text="Software Developer" />
						{" living in Southern California with interests in "}
						<TextLink
							href={Endpoints.home}
							text="technology 📺"
							disabled={true}
						/>{" "}
						<TextLink
							href={Endpoints.camping}
							text="camping 🏕️"
							disabled={true}
						/>{" "}
						<TextLink
							href={Endpoints.fitness}
							text="fitness 💪"
							disabled={true}
						/>
						{" & "}
						<TextLink
							href={Endpoints.coffee}
							text="coffee ☕"
							disabled={true}
						/>
					</div>
					<div>
						{`I have been building software for about 4 years, including about ${yearsExperience} years of professional Mobile & Web Development and the rest working on my `}
						<TextLink href={ExtEndpoints.cpp} text="Computer Science Degree," />
						{" and working on some "}
						<TextLink href={Endpoints.projects} text="projects" />
						{" on the side. "}
					</div>
				</div>
			</div>
		</div>
	);
};
