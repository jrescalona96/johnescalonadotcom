import { Container } from "../../../components/layout/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
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
} from "@fortawesome/free-brands-svg-icons";
import { fetchSkillsByCategory } from "../../../data/services";
import { useAsyncData } from "../../../hooks/use-async-data";

const skillCategoryConfig: Record<string, { label: string; icon: React.ReactElement }> = {
  languages: { label: "Languages", icon: <FontAwesomeIcon icon={faCode} /> },
  frameworks: { label: "Frameworks & Libraries", icon: <FontAwesomeIcon icon={faWandMagicSparkles} /> },
  tools: { label: "Tools & Platforms", icon: <FontAwesomeIcon icon={faGears} /> },
};

const brandIcons: Record<string, React.ReactElement> = {
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

const skillsByCategoryPromise = fetchSkillsByCategory();

export function SkillsSection() {
  const skillsByCategory = useAsyncData(skillsByCategoryPromise);

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
