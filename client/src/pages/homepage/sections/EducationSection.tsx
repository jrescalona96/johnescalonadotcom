import { Container } from "../../../components/layout/Container";
import { fetchExperiences } from "../../../data/services";
import { useAsyncData } from "../../../hooks/use-async-data";
import { formatDate } from "../../../shared/date-utils";

const educationPromise = fetchExperiences().then((experiences) =>
  experiences.filter((e) => e.type === "education"),
);

export function EducationSection() {
  const education = useAsyncData(educationPromise);

  return (
    <section id="education" className="scroll-mt-12 pb-48">
      <Container className="pb-96">
        <div className="font-mono text-base font-medium uppercase tracking-widest text-accent">
          Education
        </div>
        <h2 className="mt-3 max-w-150 font-display text-[clamp(28px,3.5vw,40px)] font-bold leading-tight tracking-tight">
          Where I've studied
        </h2>
        <div className="mt-12 grid gap-5">
          {education.map((exp) => (
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
              {exp.url && (
                <a
                  href={exp.url}
                  target="_blank"
                  rel="noopener"
                  className="mt-3 inline-flex font-body text-sm font-medium leading-none text-accent hover:underline"
                >
                  Learn more &rarr;
                </a>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
