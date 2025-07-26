import { useMemo } from "react";
import { TextLink } from "../components/TextLink";
import { NavBar } from "../components/NavBar";
import { Endpoints, ExtEndpoints } from "../assets/constants/AppUrls";
import { Footer } from "../components/Footer";
import { Project } from "../data/models/Project";
import { Repository } from "../data/repository/Repository";
import { Image } from "../data/models/Image";
import { Video } from "../data/models/Video";

export const HomePage = () => {
	const projects: Project[] = Repository.getInstance().getAllProjects();
	
	return (
		<section>
			<NavBar />
			<div className="page-content flex flex-col gap-y-16">
				<div className="transform flex flex-col sm:flex-row align-baseline gap-x-8">
					<Introduction />
					<ProfilePic />
				</div>
				<div className="mt-8">
					<h2 className="text-4xl font-bold mb-8">Projects</h2>
					<ProjectSection projects={projects} />
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

const ProjectSection = ({ projects }: { projects: Project[] }) => {
	return (
		<div className="flex flex-col gap-y-10">
			{projects.map((project: Project) => {
				return <ProjectItem key={project.id} data={project} />;
			})}
		</div>
	);
};

const ProjectHeading = ({ data }: { data: Project }) => {
	if (!data) {
		return <></>;
	}
	return (
		<div id={data.id}>
			<div className="flex gap-2 pb-2">
				<img
					className="w-6 h-6 rounded-md"
					src={`${data.projectIcon?.src}`}
					title={data.projectName}
				/>
				<TextLink
					className="heading-1"
					text={data.projectName}
					href={data.url ?? ""}
				/>
			</div>
			<p className="body">{data.description}</p>
		</div>
	);
};

const ProjectMedia = ({ data }: { data?: Image | Video }) => {
	if (!data) {
		return <></>;
	}
	return (
		<div className="sm:basis-4/5">
			{data instanceof Image && (
				<img className="rounded-md" src={`${data?.src}`} />
			)}
			{data instanceof Video && (
				<div className="container h-96">
					<iframe
						className="w-full h-full rounded-lg"
						src={`${data?.src}`}
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
				</div>
			)}
		</div>
	);
};

const TechnologyStack = ({ data }: { data?: Image[] }) => {
	if (!data || data.length === 0) {
		return <></>;
	}
	return (
		<ul className="flex flex-col gap-1 sm:w-1/5 align-top">
			{data?.map((icon) => {
				return (
					<li key={icon.id} className="flex">
						<img
							src={`${icon.src}`}
							alt=""
							className="w-6 h-6"
							title={icon.label}
						/>
						<p className="font-thin pl-1">{icon.label}</p>
					</li>
				);
			})}
		</ul>
	);
};

const ProjectItem = ({ data }: { data: Project }) => {
	return (
		<div id={data.projectName} className="flex flex-col sm:flex-col gap-4">
			<ProjectHeading data={data} />
			<div className="hidden sm:flex gap-x-4">
				<ProjectMedia data={data.projectMedia} />
				<TechnologyStack data={data.techStackLogos} />
			</div>
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
						{" I currently a Software Developer living in Southern California with interests in "}
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
						<TextLink href={ExtEndpoints.cpp} text="Computer Science Degree." />
					</div>
				</div>
			</div>
		</div>
	);
};
