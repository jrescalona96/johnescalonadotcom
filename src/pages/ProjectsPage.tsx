import { PageTitle } from "../components/PageTitle";
import { NavBar } from "../components/NavBar";
import { Project } from "../data/models/Project";
import { Repository } from "../data/repository/Repository";
import { TextLink } from "../components/TextLink";
import { Footer } from "../components/Footer";

export const ProjectsPage = () => {
	const projects: Project[] = Repository.getInstance().getAllProjects();
	return (
		<section>
			<NavBar />
			<div className="page-content">
				<PageTitle text="Projects" />
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
				const {
					projectName,
					url,
					projectIcon,
					description,
					projectImage,
					techStackLogos,
				} = project;
				return (
					<div
						id={projectName}
						key={projectName}
						className="flex flex-col sm:flex-row gap-4">
						<div className="w-full sm:w-2/3">
							<TextLink
								className="font-bold"
								text={projectName}
								href={url ?? ""}
							/>
							<p className="font-light">{description}</p>
						</div>
						<div className="flex sm:w-1/3 gap-x-4 sm:justify-end">
							<img
								className="w-16 h-16 rounded-md my-auto"
								src={`${projectIcon?.src}`}
								title={projectName}
							/>
							<ul className="my-auto">
								{techStackLogos?.map((icon) => {
									return (
										<li key={icon.id} className="flex">
											<img
												src={`${icon.src}`}
												alt=""
												className="w-6 h-6 cover-fill"
												title={icon.label}
											/>
											<p className="font-thin pl-1">{icon.label}</p>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				);
			})}
		</div>
	);
};
