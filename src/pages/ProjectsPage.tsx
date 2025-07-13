import { PageTitle } from "../components/PageTitle";
import { NavBar } from "../components/NavBar";
import { Project } from "../data/models/Project";
import { Repository } from "../data/repository/Repository";
import { TextLink } from "../components/TextLink";
import { Footer } from "../components/Footer";
import { Image } from "../data/models/Image";
import { Video } from "../data/models/Video";

export const ProjectsPage = () => {
	const projects: Project[] = Repository.getInstance().getAllProjects();
	return (
		<section>
			<NavBar />
			<div className="page-content">
				<ProjectSection projects={projects} />
			</div>
			<Footer />
		</section>
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
