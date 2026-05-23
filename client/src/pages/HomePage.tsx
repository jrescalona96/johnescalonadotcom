import { Container } from "../components/layout/Container";
import { Button } from "../components/ui/Button";
import { Toast } from "../components/ui/Toast";
import { Endpoints, ExtEndpoints } from "../assets/constants/AppUrls";
import { StringConstants } from "../assets/constants/StringConstant";
import { Repository } from "../data/repository/Repository";
import { Experience } from "../data/models/Experience";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileArrowDown,
  faCode,
  faMobileScreen,
  faWind,
  faGears,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import {
  faJs,
  faJava,
  faHtml5,
  faCss3Alt,
  faReact,
  faAngular,
  faNode,
  faGitAlt,
  faDocker,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useState, useRef } from "react";

const repo = Repository.getInstance();

export function HomePage() {
  const [toastShow, setToastShow] = useState(false);

  return (
    <>
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection onMessageSent={() => setToastShow(true)} />
      <EducationSection />
      <Toast
        message="Thanks — I'll get back to you soon."
        show={toastShow}
        onHide={() => setToastShow(false)}
      />
    </>
  );
}

function HeroSection() {
  return (
    <section id="home" className="flex min-h-screen items-center px-6 pb-20 pt-30 scroll-mt-30">
      <Container className="grid grid-cols-1 items-center gap-14 md:grid-cols-[1fr_280px]">
        <div>
          <h1 className="font-display text-[clamp(36px,5vw,64px)] font-bold leading-none tracking-tighter">
            John Escalona
          </h1>
          <p className="font-body text-[clamp(18px,2vw,22px)] font-medium leading-snug text-muted">
            Software Developer at <span className="font-semibold text-foreground">Mercury Insurance</span>
          </p>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
            Full-stack engineer with a track record of shipping features that cut QA cycles in half,
            boost app ratings, and modernize legacy systems. Cal Poly Pomona CS grad based in Southern California.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button as="a" href={Endpoints.resume} variant="primary">
              <FontAwesomeIcon icon={faFileArrowDown} /> Download resume
            </Button>
            <Button as="a" href="#projects">
              View projects
            </Button>
            <Button as="a" href="#contact">
              Get in touch
            </Button>
          </div>
          <div className="mt-8 flex gap-8">
            <div className="text-left">
              <div className="font-display text-2xl font-bold leading-none tracking-tight">5+</div>
              <div className="mt-1 font-mono text-xs uppercase tracking-wider text-muted">Years building</div>
            </div>
            <div className="text-left">
              <div className="font-display text-2xl font-bold leading-none tracking-tight">B.S.</div>
              <div className="mt-1 font-mono text-xs uppercase tracking-wider text-muted">Computer Science, CPP</div>
            </div>
            <div className="text-left">
              <div className="font-display text-2xl font-bold leading-none tracking-tight">Southern CA</div>
              <div className="mt-1 font-mono text-xs uppercase tracking-wider text-muted">Available locally</div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-content bg-border">
          <img
            src="./images/john_escalona_desktop.jpg"
            alt="John Escalona"
            className="block h-auto w-full"
          />
        </div>
      </Container>
    </section>
  );
}

const formatDate = (exp: Experience) => {
  if (!exp.startDate && !exp.endDate) return "";
  if (exp.startDate && !exp.endDate) return "Present";
  if (exp.startDate && exp.endDate && exp.startDate === exp.endDate) return String(exp.startDate);
  if (exp.startDate && exp.endDate && exp.startDate !== exp.endDate) {
    if (exp.type === "education" || (exp.endDate - exp.startDate) > 1) {
      return `${exp.startDate} – ${exp.endDate}`;
    }
    return String(exp.startDate);
  }
  return "";
};

function ExperienceSection() {
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

function ProjectsSection() {
  const projects = repo.getAllProjects();

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

const skillCategoryConfig: Record<string, { label: string; icon: ReturnType<typeof FontAwesomeIcon> }> = {
  languages: { label: "Languages", icon: <FontAwesomeIcon icon={faCode} /> },
  frameworks: { label: "Frameworks & Libraries", icon: <FontAwesomeIcon icon={faWandMagicSparkles} /> },
  tools: { label: "Tools & Platforms", icon: <FontAwesomeIcon icon={faGears} /> },
};

const brandIcons: Record<string, ReturnType<typeof FontAwesomeIcon>> = {
  JavaScript: <FontAwesomeIcon icon={faJs} />,
  TypeScript: <FontAwesomeIcon icon={faCode} />,
  Java: <FontAwesomeIcon icon={faJava} />,
  HTML: <FontAwesomeIcon icon={faHtml5} />,
  CSS: <FontAwesomeIcon icon={faCss3Alt} />,
  React: <FontAwesomeIcon icon={faReact} />,
  Angular: <FontAwesomeIcon icon={faAngular} />,
  Flutter: <FontAwesomeIcon icon={faMobileScreen} />,
  "Node.js": <FontAwesomeIcon icon={faNode} />,
  "Spring Boot": <FontAwesomeIcon icon={faJava} />,
  Tailwind: <FontAwesomeIcon icon={faWind} />,
  Git: <FontAwesomeIcon icon={faGitAlt} />,
  Docker: <FontAwesomeIcon icon={faDocker} />,
};

function SkillsSection() {
  const skillsByCategory = repo.getSkillsByCategory();

  return (
    <section id="skills" className="scroll-mt-16">
      <Container className="pb-25">
        <div className="font-mono text-sm font-medium uppercase tracking-widest text-accent">
          Skills
        </div>
        <h2 className="mt-3 max-w-xl font-display text-[clamp(28px,3.5vw,40px)] font-bold leading-tight tracking-tight">
          Technologies I work with
        </h2>
        <div className="mt-12">
          {Object.entries(skillCategoryConfig).map(([key, config]) => {
            const skills = skillsByCategory[key as keyof typeof skillsByCategory];
            if (!skills?.length) return null;
            return (
              <div key={key} className="mb-9">
                <h3 className="font-display text-sm font-semibold leading-none text-foreground mb-3.5">
                  {config.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill.id}
                      className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-3.5 py-1.5 font-body text-sm font-medium leading-snug transition-colors duration-150 hover:border-accent-soft"
                    >
                      {brandIcons[skill.name] && (
                        <span className="text-accent">{brandIcons[skill.name]}</span>
                      )}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function EducationSection() {
  const education = repo.getExperiences().filter((e) => e.type === "education");

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

function ContactSection({ onMessageSent }: { onMessageSent: () => void }) {
  const formRef = useRef<HTMLFormElement>(null);

  // TODO: replace mailto with server-side handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const mailto = `mailto:${StringConstants.emailAddress}?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;

    window.location.href = mailto;
    form.reset();
    onMessageSent();
  };

  return (
    <section id="contact" className="border-t border-border bg-surface pb-32 scroll-mt-16">
      <Container className="pb-25">
        <div className="font-mono text-sm font-medium uppercase tracking-widest text-accent">
          Contact
        </div>
        <h2 className="mt-3 max-w-xl font-display text-[clamp(28px,3.5vw,40px)] font-bold leading-tight tracking-tight">
          Let's talk
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <p className="max-w-md text-base leading-relaxed text-muted">
              I'm open to new opportunities in Southern California and remote.
              Reach out on LinkedIn, check my GitHub, or drop a message below.
            </p>
            <div className="mt-6 flex flex-col gap-3.5">
              <a
                href={ExtEndpoints.github}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-3 rounded-content border border-border bg-surface px-4 py-3 text-sm font-medium text-foreground transition-colors duration-150 hover:border-accent-soft"
              >
                <FontAwesomeIcon icon={faGithub} className="w-5 text-center text-lg text-accent" />
                jrescalona96
                <span className="ml-auto font-mono text-xs leading-none text-muted">GitHub</span>
              </a>
              <a
                href={ExtEndpoints.linkedin}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-3 rounded-content border border-border bg-surface px-4 py-3 text-sm font-medium text-foreground transition-colors duration-150 hover:border-accent-soft"
              >
                <FontAwesomeIcon icon={faLinkedin} className="w-5 text-center text-lg text-accent" />
                john-escalona
                <span className="ml-auto font-mono text-xs leading-none text-muted">LinkedIn</span>
              </a>
              <a
                href={Endpoints.resume}
                className="inline-flex items-center gap-3 rounded-content border border-border bg-surface px-4 py-3 text-sm font-medium text-foreground transition-colors duration-150 hover:border-accent-soft"
              >
                <FontAwesomeIcon icon={faFileArrowDown} className="w-5 text-center text-lg text-accent" />
                Download resume (PDF)
                <span className="ml-auto font-mono text-xs leading-none text-muted">Print</span>
              </a>
            </div>
          </div>
          <form ref={formRef} onSubmit={handleSubmit} className="max-w-full">
            <div className="mb-4.5">
              <label htmlFor="name" className="mb-1.5 block font-body text-sm font-medium text-muted">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
                className="w-full rounded-content border border-border bg-surface px-3.5 py-3 font-body text-sm leading-snug text-foreground outline-none transition-colors duration-150 placeholder:text-muted focus:border-accent"
              />
            </div>
            <div className="mb-4.5">
              <label htmlFor="email" className="mb-1.5 block font-body text-sm font-medium text-muted">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                required
                className="w-full rounded-content border border-border bg-surface px-3.5 py-3 font-body text-sm leading-snug text-foreground outline-none transition-colors duration-150 placeholder:text-muted focus:border-accent"
              />
            </div>
            <div className="mb-4.5">
              <label htmlFor="message" className="mb-1.5 block font-body text-sm font-medium text-muted">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="What role or project are you reaching out about?"
                required
                className="min-h-30 w-full resize-y rounded-content border border-border bg-surface px-3.5 py-3 font-body text-sm leading-snug text-foreground outline-none transition-colors duration-150 placeholder:text-muted focus:border-accent"
              />
            </div>
            <Button type="submit" variant="primary">
              Send message
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}
