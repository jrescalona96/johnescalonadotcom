import { StringConstants } from "../assets/constants/StringConstant";
import { PageTitle } from "../components/PageTitle";
import { NavBar } from "../components/NavBar";
import { TextLink } from "../components/TextLink";
import { Header } from "../components/Header";
import { Experience } from "../data/models/Experience";
import { Repository } from "../data/repository/Repository";
import { Project } from "../data/models/Project";

export const ResumePage = () => {
  const repository: Repository = Repository.getInstance();
  const professionalExperience: Experience[] =
    repository.getProfessionalExperiences();
  const academicExperiences: Experience[] = repository.getAcademicExperiences();
  const allProjects: Project[] = repository.getAllProjects();
  const secondarySkills: string[] = [];
  const primarySkills: string[] = [];
  repository.getSkills().forEach((item) => {
    if (item.isPrimary) {
      primarySkills.push(item.name);
    } else {
      secondarySkills.push(item.name);
    }
  });

  const getStartEndYears = (start?: number, end?: number) => {
    if (!start || start < 0) {
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
        <ResumeHeader />
        {/* Two-column layout: Main content and Skills */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left column - Experience, Projects, Education */}
          <div className="flex flex-col gap-8 lg:w-3/4">
            <ProfessionalExperienceSection
              experiences={professionalExperience}
              getStartEndYears={getStartEndYears}
            />
            <ProjectsSection projects={allProjects} />
            <EducationSection
              experiences={academicExperiences}
              getStartEndYears={getStartEndYears}
            />
          </div>
          {/* Right column - Skills */}
          <SkillsSection
            primarySkills={primarySkills}
            secondarySkills={secondarySkills}
          />
        </div>
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
  showBullets = true,
}: {
  key?: any;
  url?: string;
  highlight?: boolean;
  header?: string;
  subHeader?: string;
  subTitle?: string;
  details?: string[];
  showBullets?: boolean;
}) => {
  return (
    <div className="flex flex-col w-full basis-full">
      <a key={key} href={url} className="link">
        <p className={"heading-1"}>{header}</p>
      </a>
      {subHeader && <p className="heading-2">{subHeader}</p>}
      {subTitle && <p className="heading-3">{subTitle}</p>}
      {showBullets ? (
        <ul className="ml-4">
          {details?.map((item, index) => {
            return (
              <li key={index} className="list-disc font-light">
                {item}
              </li>
            );
          })}
        </ul>
      ) : (
        <div>
          {details?.map((item, index) => {
            return (
              <p key={index} className="font-light mb-2">
                {item}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

const ResumeHeader = () => (
  <>
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
  </>
);

const ProfessionalExperienceSection = ({
  experiences,
  getStartEndYears,
}: {
  experiences: Experience[];
  getStartEndYears: (start?: number, end?: number) => string;
}) => (
  <section id="professional-experience" className="flex flex-col gap-4">
    <Header text="PROFESSIONAL EXPERIENCE" className="border-b" />
    {experiences.map(
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
        const highlight: boolean = index === 0;
        return (
          <SectionEntry
            key={id}
            url={url}
            header={role + getStartEndYears(startDate, endDate)}
            subHeader={
              !previousRoles || !previousRoles[0]
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
);

const ProjectsSection = ({ projects }: { projects: Project[] }) => (
  <section id="projects" className="flex flex-col gap-4">
    <Header text="PROJECTS" className="border-b" />
    {projects.map(({ id, url, projectName, description }) => {
      return (
        <a key={id} href={url} className="flex flex-col sm:flex-row">
          <SectionEntry
            key={id}
            header={projectName}
            details={description}
            showBullets={false}
          />
        </a>
      );
    })}
  </section>
);

const EducationSection = ({
  experiences,
  getStartEndYears,
}: {
  experiences: Experience[];
  getStartEndYears: (start?: number, end?: number) => string;
}) => (
  <section id="education" className="flex flex-col gap-4">
    <Header text="EDUCATION" className="border-b" />
    {experiences.map(
      ({ id, url, role, entity, description, startDate, endDate }) => {
        return (
          <a key={id} href={url} className="flex flex-col sm:flex-row gap-x-6">
            <SectionEntry
              showBullets={false}
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
);

const SkillsSection = ({
  primarySkills,
  secondarySkills,
}: {
  primarySkills: string[];
  secondarySkills: string[];
}) => (
  <section id="skills" className="flex flex-col gap-4 lg:w-1/3">
    <div className="border-b">
      <Header text="SKILLS" />
    </div>
    <div className="flex flex-col gap-4">
      <SkillCategory title="" skills={primarySkills} />
      <SkillCategory title="" skills={secondarySkills} />
    </div>
  </section>
);

const SkillCategory = ({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) => (
  <div>
    {title && title !== "" && <h4 className="font-semibold mb-2">{title}</h4>}
    <ul className="ml-4">
      {skills.map((skill, index) => (
        <li key={index} className="list-disc font-light">
          {skill}
        </li>
      ))}
    </ul>
  </div>
);
