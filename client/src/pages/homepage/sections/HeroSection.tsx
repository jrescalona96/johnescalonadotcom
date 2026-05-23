import { Container } from "../../../components/layout/Container";
import { Button } from "../../../components/ui/Button";
import { Endpoints } from "../../../assets/constants/app-urls";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

export function HeroSection() {
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
