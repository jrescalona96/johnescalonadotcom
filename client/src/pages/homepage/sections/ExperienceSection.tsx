import { Container } from "../../../components/layout/Container";
import { Button } from "../../../components/ui/Button";
import { Endpoints } from "../../../assets/constants/app-urls";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Repository } from "../../../data/repository/repository";
import { formatDate } from "../../../shared/date-utils";

const repo = Repository.getInstance();

export function ExperienceSection() {
  const experiences = repo.getExperiences().filter((e) => e.type !== "education");

  return (
    <section id="experience" className="scroll-mt-30">
      <Container className="pb-12">
        <div className="font-mono text-sm font-medium uppercase tracking-widest text-accent">
          Experience
        </div>
        <h2 className="mt-3 max-w-xl font-display text-[clamp(28px,3.5vw,40px)] font-bold leading-tight tracking-tight">
          What I've shipped
        </h2>
        <div className="mt-12 grid gap-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="rounded-content border border-border bg-surface p-8"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <h3 className="font-display text-lg font-semibold leading-snug">
                  {exp.entity}
                </h3>
                <span className="font-mono text-sm leading-none text-muted whitespace-nowrap">
                  {formatDate(exp)}
                </span>
              </div>
              {exp.role && (
                <p className="mt-1 font-body text-sm font-medium leading-snug text-muted">
                  {exp.role}
                  {exp.location ? ` · ${exp.location}` : ""}
                </p>
              )}
              <div className="mt-3 text-sm leading-relaxed text-muted">
                <ul className="list-none p-0">
                  {exp.description.map((item, i) => (
                    <li key={i} className="relative mb-1.5 pl-4 before:absolute before:left-0 before:top-2.5 before:h-1 before:w-1 before:rounded-full before:bg-accent-soft">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button as="a" href={Endpoints.resume} variant="primary">
            <FontAwesomeIcon icon={faFileArrowDown} /> Full resume
          </Button>
        </div>
      </Container>
    </section>
  );
}
