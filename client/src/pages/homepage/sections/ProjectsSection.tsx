import { Container } from "../../../components/layout/Container";
import { Button } from "../../../components/ui/Button";
import { Endpoints } from "../../../assets/constants/app-urls";
import { fetchProjects } from "../../../data/services";
import { useAsyncData } from "../../../hooks/use-async-data";

const projectsPromise = fetchProjects();

export function ProjectsSection() {
  const projects = useAsyncData(projectsPromise);

  return (
    <section id="projects" className="border-y border-border bg-surface scroll-mt-16">
      <Container className="pb-25">
        <div className="font-mono text-sm font-medium uppercase tracking-widest text-accent">
          Projects
        </div>
        <h2 className="mt-3 max-w-xl font-display text-[clamp(28px,3.5vw,40px)] font-bold leading-tight tracking-tight">
          Selected work
        </h2>
        <div className="mt-12 grid gap-5">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener"
              className="grid grid-cols-[1fr_auto] items-start gap-5 rounded-content border border-border bg-surface p-7 transition-colors duration-150 hover:border-accent-soft"
            >
              <div>
                <h3 className="font-display text-lg font-semibold leading-snug tracking-tight">
                  {project.projectName}
                </h3>
                {project.techStack && (
                  <div className="mt-1 font-mono text-xs leading-none text-muted">
                    {project.techStack.join(" · ")}
                  </div>
                )}
                {project.description?.[0] && (
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {project.description[0]}
                  </p>
                )}
              </div>
              <div className="mt-1 text-xl text-muted transition-colors duration-150 group-hover:text-accent">
                &rarr;
              </div>
            </a>
          ))}
        </div>
        <div className="mt-7 text-center">
          <Button as="a" href={Endpoints.projects}>
            View all projects &rarr;
          </Button>
        </div>
      </Container>
    </section>
  );
}
