import { Container } from "../components/layout/Container";
import { NavLink } from "../components/ui/NavLink";
import { Button } from "../components/ui/Button";
import { Endpoints, ExtEndpoints } from "../assets/constants/AppUrls";
import { Repository } from "../data/repository/Repository";
import { Experience } from "../data/models/Experience";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub as faGithubBrand, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const repo = Repository.getInstance();

export function ResumePage() {
  const experiences = repo.getExperiences();
  const skillsByCategory = repo.getSkillsByCategory();

  const formatDate = (exp: Experience) => {
    if (!exp.startDate && !exp.endDate) return "";
    if (exp.startDate && !exp.endDate) return "Present";
    if (exp.startDate && exp.endDate && exp.startDate === exp.endDate) return String(exp.startDate);
    if (exp.startDate && exp.endDate) return `${exp.startDate} – ${exp.endDate}`;
    return "";
  };

  return (
    <>
      <div className="pt-[120px] pb-4">
        <Container className="max-w-[900px]">
          <NavLink to={Endpoints.home} className="mb-4 inline-flex items-center gap-1 text-[14px] text-muted hover:text-foreground">
            &larr; Back home
          </NavLink>

          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <h1 className="font-display text-[clamp(30px,3.5vw,42px)] font-bold leading-[1.1] tracking-tight">
                John Escalona
              </h1>
              <p className="font-body text-[17px] font-medium leading-[1.4] text-muted">
                Software Developer
              </p>
              <div className="mt-[10px] flex flex-wrap gap-5 text-[14px] text-muted">
                <span>
                  <FontAwesomeIcon icon={faLocationDot} className="mr-1 w-4 text-center text-accent" />
                  Southern California
                </span>
                <a href={ExtEndpoints.github} target="_blank" rel="noopener" className="hover:text-accent">
                  <FontAwesomeIcon icon={faGithubBrand} className="mr-1 w-4 text-center text-accent" />
                  github.com/jrescalona96
                </a>
                <a href={ExtEndpoints.linkedin} target="_blank" rel="noopener" className="hover:text-accent">
                  <FontAwesomeIcon icon={faLinkedin} className="mr-1 w-4 text-center text-accent" />
                  john-escalona
                </a>
              </div>
            </div>
            <Button
              as="a"
              href={Endpoints.download_resume}
              target="_blank"
              rel="noopener"
              variant="secondary"
              className="print-hidden"
            >
              <FontAwesomeIcon icon={faPrint} /> Print / PDF
            </Button>
          </div>

          <div className="mt-6 rounded-content border border-border bg-surface p-7 text-[15px] leading-relaxed text-muted">
            <strong className="text-foreground">Full-stack software developer</strong> with a Computer Science degree
            from Cal Poly Pomona and professional experience shipping production features at Mercury Insurance. I build
            across mobile (Flutter), web (React, Angular), and backend (Node.js, Java/Spring Boot), with a focus on
            measurable impact — cutting QA cycles 50%, lifting test coverage from 0 to 70%, and driving app store
            engagement through in-app feedback systems. Open to opportunities in Southern California and remote.
          </div>

          <h2 className="mt-10 mb-6 border-b border-border pb-2 font-display text-[18px] font-semibold leading-none tracking-tight">
            Experience
          </h2>

          {experiences.map((exp) => (
            <div key={exp.id} className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-[150px_1fr]">
              <div className="font-mono text-[13px] leading-[1.4] text-muted pt-[2px]">
                {formatDate(exp)}
              </div>
              <div>
                <div className="font-display text-[16px] font-semibold leading-snug">
                  {exp.entity}
                </div>
                {exp.role && (
                  <p className="font-body text-[14px] font-medium leading-[1.4] text-muted mb-[10px]">
                    {exp.role}
                    {exp.location ? ` · ${exp.location}` : ""}
                  </p>
                )}
                <div className="text-[14px] leading-relaxed text-muted">
                  <ul className="list-none p-0">
                    {exp.description.map((item, i) => (
                      <li key={i} className="relative mb-[6px] pl-4 before:absolute before:left-0 before:top-[10px] before:h-[5px] before:w-[5px] before:rounded-full before:bg-accent-soft">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}

          <h2 className="mt-10 mb-6 border-b border-border pb-2 font-display text-[18px] font-semibold leading-none tracking-tight">
            Skills
          </h2>

          <div className="mb-12">
            <div className="mb-3 grid grid-cols-1 gap-4 sm:grid-cols-[130px_1fr] text-[14px]">
              <span className="font-semibold text-foreground">Languages</span>
              <span className="text-muted">
                {skillsByCategory.languages.map((s) => (
                  <span
                    key={s.id}
                    className="mr-1 mb-1 inline-block rounded-sm border border-border bg-surface px-[10px] py-[2px] text-[13px]"
                  >
                    {s.name}
                  </span>
                ))}
              </span>
            </div>
            <div className="mb-3 grid grid-cols-1 gap-4 sm:grid-cols-[130px_1fr] text-[14px]">
              <span className="font-semibold text-foreground">Frameworks</span>
              <span className="text-muted">
                {skillsByCategory.frameworks.map((s) => (
                  <span
                    key={s.id}
                    className="mr-1 mb-1 inline-block rounded-sm border border-border bg-surface px-[10px] py-[2px] text-[13px]"
                  >
                    {s.name}
                  </span>
                ))}
              </span>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-[130px_1fr] text-[14px]">
              <span className="font-semibold text-foreground">Tools</span>
              <span className="text-muted">
                {skillsByCategory.tools.map((s) => (
                  <span
                    key={s.id}
                    className="mr-1 mb-1 inline-block rounded-sm border border-border bg-surface px-[10px] py-[2px] text-[13px]"
                  >
                    {s.name}
                  </span>
                ))}
              </span>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
