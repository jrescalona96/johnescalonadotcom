import { useState } from "react";
import { Toast } from "../../components/ui/Toast";
import { HeroSection } from "./sections/HeroSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { SkillsSection } from "./sections/SkillsSection";
import { ContactSection } from "./sections/ContactSection";
import { EducationSection } from "./sections/EducationSection";

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
