import { Container } from "./Container";
import { Endpoints } from "../../assets/constants/app-urls";
import { ExtEndpoints } from "../../assets/constants/app-urls";

export function Footer() {
  return (
    <footer className="border-t border-border py-8 text-center text-sm text-muted">
      <Container>
        <p>
          &copy; 2026 John Escalona &middot;{" "}
          <a href={Endpoints.projects} className="text-foreground hover:text-accent">
            Projects
          </a>{" "}
          &middot;{" "}
          <a href={Endpoints.resume} className="text-foreground hover:text-accent">
            Resume
          </a>{" "}
          &middot;{" "}
          <a href={ExtEndpoints.github} target="_blank" rel="noopener" className="text-foreground hover:text-accent">
            GitHub
          </a>{" "}
          &middot;{" "}
          <a href={ExtEndpoints.linkedin} target="_blank" rel="noopener" className="text-foreground hover:text-accent">
            LinkedIn
          </a>
        </p>
      </Container>
    </footer>
  );
}
