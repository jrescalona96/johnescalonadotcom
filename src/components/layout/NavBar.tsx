import { Container } from "./Container";
import { NavLink } from "../ui/NavLink";
import { Endpoints } from "../../assets/constants/AppUrls";
import { cn } from "../../lib/utils";
import { useScrollSpy } from "../../hooks/useScrollSpy";

const sectionLinks = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export function NavBar() {
  const isHome = window.location.pathname === Endpoints.home;
  const activeSection = useScrollSpy(
    isHome ? sectionLinks.map((s) => s.id) : [],
    120
  );

  const isActive = (path: string) => {
    if (path === Endpoints.home) return isHome;
    return window.location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-100 border-b border-border bg-white/82 backdrop-blur-[12px]">
      <Container className="flex h-[60px] items-center justify-between">
        <NavLink
          to={Endpoints.home}
          className="font-display text-[16px] font-semibold leading-none tracking-tight"
        >
          John Escalona
        </NavLink>
        <ul className="flex list-none gap-1">
          {isHome && sectionLinks.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={cn(
                  "rounded-md px-[14px] py-2 text-sm font-medium transition-colors duration-150",
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
