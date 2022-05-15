import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";
import { Project } from "../data/models/Project";
import { Repository } from "../data/repository/Repository";
import { TextLink } from "../components/TextLink";

export const ProjectsPage = () => {
	const projects: Project[] = Repository.getInstance().getProjects();
	return (
		<section>
			<NavBar />
			<div className="page-content">
				<Header text="Projects" />
				<ProjectSection projects={projects} />
			</div>
		</section>
	);
};

const ProjectSection = ({ projects }: { projects: Project[] }) => {
	return (
		<div className="flex flex-col gap-y-10">
			{projects.map((project: Project) => {
				const { projectName, url, projectIcon, description, projectImage } =
					project;
				return (
					<div key={projectName}>
						<TextLink
							className="font-black hover:bg-green-200"
							text={projectName}
							href={url ?? ""}
						/>
						<div className="flex flex-col md:flex-row gap-x-10">
							<p className="w-2/3">{description}</p>
							<ul className="flex flex-col justify-start">
								{project.techStackLogos?.map((img) => {
									return (
										<li className="flex gap-x-2.5">
											<img
												className="w-6"
												src={img.src}
												alt=""
												title={img.label}
											/>
											<p className="w-full">{img.label}</p>
										</li>
									);
								})}
							</ul>

							{/* todo: make images expandable */}
							{/* <img
								className="rounded-md w-full md:w-1/2"
								src={projectImage?.src}
							/> */}
						</div>
					</div>
				);
			})}
		</div>
	);
};
