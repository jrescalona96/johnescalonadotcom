import { PageTitle } from "../components/PageTitle";
import { useState, useEffect } from "react";
import { TextLink } from "../components/TextLink";
import { NavBar } from "../components/NavBar";
import { Endpoints, ExtEndpoints } from "../assets/constants/AppUrls";
import { Footer } from "../components/Footer";
import { SplashPage } from "./SplashPage";

export const HomePage = () => {
	return (
		<section>
			<NavBar />
			<div className="justify-center items-center page-content">
				<div className="transform flex flex-col sm:flex-row align-baseline gap-x-10">
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
	return (
		<div className="sm:basis-1/2">
			<h1 className="font-bold text-6xl">Hi. I'm John!</h1>
			<div className="flex flex-col md:flex-row gap-5 pt-5 ">
				<div
					id="welcomeMessage"
					className="flex flex-col gap-y-5 justify-end font-light">
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
						{
							"I have been coding for about 4 years, including 1 year of professional Mobile & Web Development and the rest working on my "
						}
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
