import { useLocation } from "react-router-dom";
import { Container } from "./Container";
import { NavLink } from "../ui/NavLink";
import { Endpoints } from "../../assets/constants/app-urls";
import { cn } from "../../lib/utils";
import { useScrollSpy } from "../../hooks/use-scroll-spy";

const sectionLinks = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
  { id: "education", label: "Education" },
];

export function NavBar() {
  const { pathname } = useLocation();
  const isHome = pathname === Endpoints.home;
  const activeSection = useScrollSpy(
    isHome ? sectionLinks.map((s) => s.id) : [],
    120
  );

  const isActive = (path: string) => {
    if (path === Endpoints.home) return isHome;
    return pathname.startsWith(path);
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-100 border-b border-border bg-white/82 backdrop-blur-md">
      <Container className="flex h-15 items-center justify-between">
        <NavLink
          to={Endpoints.home}
          className="font-display text-base font-semibold leading-none tracking-tight"
        >
          John Escalona
        </NavLink>
        <ul className="flex list-none gap-1">
          {isHome && sectionLinks.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={cn(
                  "rounded-md px-3.5 py-2 text-sm font-medium transition-colors duration-150",
                  activeSection === s.id
                    ? "text-accent"
                    : "text-foreground hover:bg-border"
                )}
              >
                {s.label}
              </a>
            </li>
          ))}
          {!isHome && (
            <li>
              <NavLink to={Endpoints.home} active={isActive(Endpoints.home)}>
                Home
              </NavLink>
            </li>
          )}
          {!isHome && (
            <li>
              <NavLink to={Endpoints.projects} active={isActive(Endpoints.projects)}>
                Projects
              </NavLink>
            </li>
          )}
          <li>
            <NavLink to={Endpoints.resume} active={isActive(Endpoints.resume)}>
              Resume
            </NavLink>
          </li>
        </ul>
      </Container>
    </nav>
  );
}