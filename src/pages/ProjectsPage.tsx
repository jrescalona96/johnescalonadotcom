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
				const { projectName, url, logo, description, projectImage } = project;
				return (
					<div key={projectName}>
						<div className="flex flex-col md:flex-row gap-x-10">
							<div>
								<div className="flex align-bottom pb-2.5">
									<img className="rounded-md w-1/12 pr-2" src={logo?.src} />
									<TextLink
										className="my-auto"
										text={projectName}
										href={url ?? ""}
									/>
								</div>
								<p>{description}</p>
							</div>

							{/* todo: make images expandable */}
							<img
								className="rounded-md w-full md:w-1/2"
								src={projectImage?.src}
							/>
						</div>
					</div>
				);
			})}
		</div>
	);
};
