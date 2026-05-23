import { useRef } from "react";
import { Container } from "../../../components/layout/Container";
import { Button } from "../../../components/ui/Button";
import { StringConstants } from "../../../assets/constants/string-constant";
import { Endpoints, ExtEndpoints } from "../../../assets/constants/app-urls";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export function ContactSection({ onMessageSent }: { onMessageSent: () => void }) {
  const formRef = useRef<HTMLFormElement>(null);

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
