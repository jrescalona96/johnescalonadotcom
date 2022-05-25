import { StringConstants } from "../assets/constants/StringConstant";
import { PageTitle } from "../components/PageTitle";
import { NavBar } from "../components/NavBar";
import { TextLink } from "../components/TextLink";
import { Header } from "../components/Header";
import { Experience } from "../data/models/Experience";
import { Repository } from "../data/repository/Repository";
import { generateUniqueID } from "../../node_modules/web-vitals/dist/modules/lib/generateUniqueID";
import { Project } from "../data/models/Project";

export const ResumePage = () => {
	const professionalExperience: Experience[] =
		Repository.getInstance().getProfessionalExperiences();
	const academicExperiences: Experience[] =
		Repository.getInstance().getAcademicExperiences();
	const allProjects: Project[] = Repository.getInstance().getProjects();

	return (
		<section>
			<NavBar />
			<div className="page-content">
				<PageTitle text="John Escalona" />
				{/* Pesonal contact start*/}
				<div className="flex flex-col sm:flex-row gap-x-2 -translate-y-4">
					<span className="font-thin">{StringConstants.phoneNumber} | </span>
					<TextLink
						className="font-extralight"
						href={`mailto: ${StringConstants.emailAddress}`}
						text={StringConstants.emailAddress}
					/>
				</div>
				{/* Pesonal contact end  */}

				<section id="projects" className="flex flex-col gap-2">
					<Header text="PROJECTS" />
					{allProjects.map((proj: Project) => {
						const {
							id,
							url,
							projectName,
							description,
							projectImage,
							projectIcon,
							techStackLogos,
						} = proj;
						return (
							<div key={id} className="flex flex-col gap-x-6 w-full sm:w-2/3">
								<div className="basis-full">
									<TextLink href={url ?? ""} text={projectName} />
									<p>{description}</p>
								</div>
							</div>
						);
					})}
				</section>

				<section id="professional-experience" className="flex flex-col gap-2">
					<Header text="PROFESSIONAL EXPERIENCE" />
					{professionalExperience.map((exp) => {
						const { url, entity, title, description, startDate, endDate } = exp;
						return (
							<div className="flex flex-col sm:flex-row gap-x-6">
								<div className="basis-full">
									<TextLink href={url ?? ""} text={entity} className="inline" />
									<p className="font-extralight">{title}</p>
									<ul className="pl-5">
										{description.map((text) => {
											const id: string =
												Repository.getInstance().generateRandomID();
											return (
												<li key={id} className="list-disc">
													{text}
												</li>
											);
										})}
									</ul>
								</div>
								<div className="basis-1/3 sm:text-right hidden sm:inline">
									{`${startDate} - ${endDate ?? "Present"}`}
								</div>
							</div>
						);
					})}
				</section>

				<section id="education" className="flex flex-col gap-2">
					<Header text="EDUCATION" />
					{academicExperiences.map((exp) => {
						const { url, entity, description, startDate, endDate } = exp;
						return (
							<div className="flex flex-col sm:flex-row gap-x-6">
								<div className="basis-full">
									<TextLink href={url ?? ""} text={entity} />
									<ul>
										{description.map((text) => {
											const id: string =
												Repository.getInstance().generateRandomID();
											return (
												<li key={id} className="font-extralight">
													{text}
												</li>
											);
										})}
									</ul>
								</div>
								<div className="basis-1/3 text-right hidden sm:inline">
									{`${startDate} - ${endDate ?? "Present"}`}
								</div>
							</div>
						);
					})}
				</section>

				<section id="skills" className="flex flex-col gap-2">
					<Header text="SKILLS" />
				</section>
			</div>
		</section>
	);
};
