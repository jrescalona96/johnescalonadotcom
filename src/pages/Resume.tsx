import { StringConstants } from "../assets/constants/StringConstant";
import { PageTitle } from "../components/PageTitle";
import { NavBar } from "../components/NavBar";
import { TextLink } from "../components/TextLink";
import { Header } from "../components/Header";
import { Experience } from "../data/models/Experience";
import { Repository } from "../data/repository/Repository";
import { Project } from "../data/models/Project";

export const ResumePage = () => {
	const professionalExperience: Experience[] =
		Repository.getInstance().getProfessionalExperiences();
	const academicExperiences: Experience[] =
		Repository.getInstance().getAcademicExperiences();
	const allProjects: Project[] = Repository.getInstance().getProjects();
	const secondarySkills: string[] = [];
	const primarySkills: string[] = [];
	Repository.getInstance()
		.getSkills()
		.forEach((item) => {
			if (item.isPrimary) {
				primarySkills.push(item.name);
			} else {
				secondarySkills.push(item.name);
			}
		});

	return (
		<section>
			<NavBar />
			<div className="page-content">
				<PageTitle text="John Escalona" />
				{/* Pesonal contact start*/}
				<div className="flex flex-col sm:flex-row gap-x-1 -translate-y-4">
					<span className="font-thin">{StringConstants.phoneNumber}</span>
					<span className="text-md hidden sm:inline">•</span>
					<TextLink
						className="font-extralight"
						href={`mailto: ${StringConstants.emailAddress}`}
						text={StringConstants.emailAddress}
					/>
				</div>
				{/* Pesonal contact end  */}

				<section id="projects" className="flex flex-col gap-4">
					<div className="border-b-2 border-gray-500">
						<Header text="PROJECTS" />
					</div>
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
							<a href={url} className="flex flex-col sm:flex-row ">
								<div
									key={id}
									className="flex flex-col gap-x-6 w-full md:w-2/3 basis-full">
									<p className="font-bold hover:underline">{projectName}</p>
									<p className="font-light">{description}</p>
								</div>
								<div className="flex md:flex-row basis-1/3 gap-x-2 sm:justify-end py-5">
									<img
										className="w-12 h-12 rounded-md"
										src={`${projectIcon?.src}`}
										alt=""
									/>
									<ul className="flex sm:grid sm:grid-cols-3 gap-x-2">
										{techStackLogos?.map((icon) => {
											return (
												<img
													key={icon.id}
													src={`${icon.src}`}
													alt=""
													className="w-6 h-6"
												/>
											);
										})}
									</ul>
								</div>
							</a>
						);
					})}
				</section>

				<section id="professional-experience" className="flex flex-col gap-4">
					<div className="border-b-2 border-gray-500">
						<Header text="PROFESSIONAL EXPERIENCE" />
					</div>
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

				<section id="education" className="flex flex-col gap-4">
					<div className="border-b-2 border-gray-500">
						<Header text="EDUCATION" />
					</div>
					{academicExperiences.map((exp) => {
						const { id, url, entity, description, startDate, endDate } = exp;
						return (
							<div key={id} className="flex flex-col sm:flex-row gap-x-6">
								<div className="basis-full">
									<TextLink href={url ?? ""} text={entity} />
									<ul className="pl-5">
										<li key={Repository.getInstance().generateRandomID()}>
											{description[0]}
										</li>
										{description.map((text: string, index: number) => {
											const id: string =
												Repository.getInstance().generateRandomID();
											if (index == 0) return;
											return (
												<li key={id} className="list-disc">
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

				<section id="skills" className="flex flex-col gap-4">
					<div className="border-b-2 border-gray-500">
						<Header text="SKILLS" />
					</div>
					<p id="primary-skills">{primarySkills.join(", ")}</p>
					<p id="secondary-skills" className="font-extralight">
						{secondarySkills.join(", ")}
					</p>
				</section>
			</div>
		</section>
	);
};
