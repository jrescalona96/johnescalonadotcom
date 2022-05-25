import { PageTitle } from "../components/PageTitle";
import { NavBar } from "../components/NavBar";
import { Project } from "../data/models/Project";
import { Repository } from "../data/repository/Repository";
import { TextLink } from "../components/TextLink";
import { Footer } from "../components/Footer";

export const ProjectsPage = () => {
	const projects: Project[] = Repository.getInstance().getProjects();
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
				const { projectName, url, projectIcon, description, projectImage } =
					project;
				return (
					<div key={projectName}>
						<TextLink
							className="font-black"
							text={projectName}
							href={url ?? ""}
						/>
						<div className="flex flex-col md:flex-row gap-x-10">
							<p className="w-2/3">{description}</p>
							<div className="tech-stack">
								<ul className="flex flex-col justify-start">
									{project.techStackLogos?.map((img) => {
										return (
											<li className="flex gap-x-2" key={img.label}>
												<img
													className="w-5 h-5 my-auto"
													src={img.src}
													alt=""
													title={img.label}
												/>
												<p className="w-full">{img.label}</p>
											</li>
										);
									})}
								</ul>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};
