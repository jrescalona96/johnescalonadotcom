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

	const getStartEndYears = (start?: number, end?: number) => {
		if (!start) {
			return "";
		} else if (!end) {
			return `, ${start}`;
		} else if (start === end) {
			return start.toString();
		} else {
			return `, ${start}-${end}`;
		}
	};

	return (
		<section>
			<NavBar />
			<div className="page-content">
				<PageTitle text="JOHN ESCALONA" classes="title" />
				<div className="flex flex-col sm:flex-row gap-x-1 -translate-y-4">
					<TextLink
						className="body link"
						href={`tel: ${StringConstants.phoneNumber}`}
						text={StringConstants.phoneNumber}
					/>
					<span className="hidden sm:inline">•</span>
					<TextLink
						className="body link"
						href={`mailto: ${StringConstants.emailAddress}`}
						text={StringConstants.emailAddress}
					/>
				</div>

				<section id="professional-experience" className="flex flex-col gap-4">
					<Header text="PROFESSIONAL EXPERIENCE" className="border-b" />
					{professionalExperience.map(
						(
							{
								id,
								url,
								entity,
								role,
								previousRoles,
								description,
								startDate,
								endDate,
							},
							index
						) => {
							// const length: string = getStartEndYears(startDate, endDate);
							const highlight: boolean = index === 0;
							console.log(previousRoles);
							return (
								<SectionEntry
									key={id}
									url={url}
									header={role + getStartEndYears(startDate, endDate)}
									subHeader={
										previousRoles === undefined ||
										previousRoles[0] === undefined
											? ""
											: previousRoles[0].role +
											  getStartEndYears(
													previousRoles[0].startDate,
													previousRoles[0].endDate
											  )
									}
									subTitle={entity}
									details={description}
									highlight={highlight}
								/>
							);
						}
					)}
				</section>

				<section id="projects" className="flex flex-col gap-4">
					<Header text="PROJECTS" className="border-b" />
					{allProjects.map(({ id, url, projectName, description }) => {
						return (
							<a key={id} href={url} className="flex flex-col sm:flex-row">
								<SectionEntry
									key={id}
									header={projectName}
									details={description}
								/>
							</a>
						);
					})}
				</section>

				<section id="education" className="flex flex-col gap-4">
					<Header text="EDUCATION" className="border-b" />
					{academicExperiences.map(
						({ id, url, role, entity, description, startDate, endDate }) => {
							return (
								<a
									key={id}
									href={url}
									className="flex flex-col sm:flex-row gap-x-6">
									<SectionEntry
										key={id}
										header={entity + getStartEndYears(startDate, endDate)}
										subHeader={role}
										details={description}
									/>
								</a>
							);
						}
					)}
				</section>

				<section id="skills" className="flex flex-col gap-4">
					<div className="border-b">
						<Header text="SKILLS" />
					</div>
					<SectionEntry
						details={[primarySkills.join(", "), secondarySkills.join(", ")]}
					/>
				</section>
			</div>
		</section>
	);
};

const SectionEntry = ({
	key,
	header,
	subHeader,
	subTitle,
	details,
	url,
	highlight = false,
}: {
	key?: any;
	url?: string;
	highlight?: boolean;
	header?: string;
	subHeader?: string;
	subTitle?: string;
	details?: string[];
}) => {
	return (
		<div className="flex flex-col w-full basis-full">
			<a key={key} href={url} className="link">
				<p className={"heading-1"}>{header}</p>
			</a>
			{subHeader && <p className="heading-2">{subHeader}</p>}
			{subTitle && <p className="heading-3">{subTitle}</p>}
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
