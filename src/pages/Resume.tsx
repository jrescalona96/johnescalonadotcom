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
	const allProjects: Project[] = Repository.getInstance().getAllProjects();
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
					<Header text="PROJECTS" className="border-b border-gray-600" />
					{allProjects.map(({ id, url, projectName, description }) => {
						return (
							<a key={id} href={url} className="flex flex-col sm:flex-row">
								<SectionEntry
									key={id}
									title={projectName}
									subTitle={description}
								/>
							</a>
						);
					})}
				</section>

				<section id="professional-experience" className="flex flex-col gap-4">
					<Header
						text="PROFESSIONAL EXPERIENCE"
						className="border-b border-gray-600"
					/>
					{professionalExperience.map(
						({ id, url, entity, role, description, startDate, endDate }) => {
							return (
								<a
									key={id}
									href={url}
									className="flex flex-col sm:flex-row gap-x-6">
									<SectionEntry
										key={id}
										title={entity}
										subTitle={role}
										details={description}
									/>
									<ExperienceYears from={startDate} to={endDate} />
								</a>
							);
						}
					)}
				</section>

				<section id="education" className="flex flex-col gap-4">
					<Header text="EDUCATION" className="border-b border-gray-600" />
					{academicExperiences.map(
						({ id, url, role, entity, description, startDate, endDate }) => {
							return (
								<a
									key={id}
									href={url}
									className="flex flex-col sm:flex-row gap-x-6">
									<SectionEntry
										key={id}
										title={entity}
										subTitle={role}
										details={description}
									/>
									<ExperienceYears from={startDate} to={endDate} />
								</a>
							);
						}
					)}
				</section>

				<section id="skills" className="flex flex-col gap-4">
					<div className="border-b border-gray-500">
						<Header text="SKILLS" />
					</div>
					<SectionEntry
						title={primarySkills.join(", ")}
						subTitle={secondarySkills.join(", ")}
					/>
				</section>
			</div>
		</section>
	);
};

const ExperienceYears = ({ from, to }: { from: any; to: any }) => {
	return (
		<div className="basis-1/3 text-right hidden sm:inline font-extralight">
			{`${from} - ${to ?? "Present"}`}
		</div>
	);
};

const SectionEntry = ({
	title,
	subTitle,
	details,
}: {
	key?: any;
	title: string;
	subTitle?: string;
	details?: string[];
}) => {
	return (
		<div className="flex flex-col w-full basis-full">
			<p className="font-bold">{title}</p>
			<p className="font-extralight">{subTitle}</p>
			{
				<ul className="ml-4">
					{details?.map((item, index) => {
						return (
							<li key={index} className="list-disc font-light">
								{item}
							</li>
						);
					})}
				</ul>
			}
		</div>
	);
};
