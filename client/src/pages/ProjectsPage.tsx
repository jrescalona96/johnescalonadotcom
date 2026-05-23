import { useState } from "react";
import { Container } from "../components/layout/Container";
import { NavLink } from "../components/ui/NavLink";
import { FilterChip } from "../components/ui/FilterChip";
import { Endpoints } from "../assets/constants/AppUrls";
import { Repository } from "../data/repository/Repository";
import { Project, type ProjectCategory } from "../data/models/Project";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faGithub as faGithubBrand } from "@fortawesome/free-brands-svg-icons";

const repo = Repository.getInstance();

type FilterOption = "all" | ProjectCategory;

const filters: { key: FilterOption; label: string }[] = [
  { key: "all", label: "All" },
  { key: "web", label: "Web" },
  { key: "mobile", label: "Mobile" },
  { key: "tool", label: "Tool" },
];

export function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("all");
  const projects = repo.getAllProjects();

  const filtered = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      <div className="pt-30 pb-12">
        <Container>
          <NavLink to={Endpoints.home} className="mb-4 inline-flex items-center gap-1 text-sm text-muted hover:text-foreground">
            &larr; Back home
          </NavLink>
          <h1 className="font-display text-[clamp(32px,4vw,48px)] font-bold leading-none tracking-tight">
            Projects
          </h1>
          <p className="mt-2 max-w-xl text-lg text-muted">
            Things I've built — from interactive algorithm visualizers to cross-platform mobile apps and engineering tools.
          </p>

          <div className="mb-10 mt-8 flex flex-wrap gap-2">
            {filters.map((f) => (
              <FilterChip
                key={f.key}
                active={activeFilter === f.key}
                onClick={() => setActiveFilter(f.key)}
              >
                {f.label}
              </FilterChip>
            ))}
          </div>

          <div className="grid gap-6">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const linkIcon = (url?: string) => {
    if (!url) return <FontAwesomeIcon icon={faArrowUpRightFromSquare} />;
    if (url.includes("github")) return <FontAwesomeIcon icon={faGithubBrand} />;
    if (url.includes("youtube")) return <FontAwesomeIcon icon={faYoutube} />;
    return <FontAwesomeIcon icon={faArrowUpRightFromSquare} />;
  };

  return (
    <div className="rounded-content border border-border bg-surface p-8 transition-colors duration-150 hover:border-accent-soft">
      <h2 className="font-display text-xl font-semibold leading-snug tracking-tight">
        {project.projectName}
      </h2>
      {project.techStack && (
        <div className="mt-1 font-mono text-xs leading-snug text-muted">
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="mr-1 text-accent" />
          {project.techStack.join(" · ")}
        </div>
      )}
      {project.description?.[0] && (
        <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-muted">
          {project.description[0]}
        </p>
      )}
      {project.tags && project.tags.length > 0 && (
        <div className="mt-3.5 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-sm bg-background px-2.5 py-1 font-mono text-xs leading-snug text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      {project.links && project.links.length > 0 && (
        <div className="mt-3.5 flex gap-4">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener"
              className="font-body text-sm font-medium leading-none text-accent hover:underline"
            >
              {linkIcon(link.url)} {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
