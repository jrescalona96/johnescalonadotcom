import { type Project, type ProjectCategory, type ProjectLink } from "../models/project";
import { type Skill } from "../models/skill";
import { type Experience, type ExperienceType } from "../models/experience";
import { generateRandomID } from "../../shared/string-utils";

export type CategorizedSkills = {
  languages: Skill[];
  frameworks: Skill[];
  tools: Skill[];
};

const id = generateRandomID;

export function getProjects(): Project[] {
  return [
    {
      id: id(),
      projectName: "Algo Visualization",
      description: [
        "Interactive algorithm visualizer demonstrating Binary Search, Merge Sort, and Quick Sort via real-time animations. Features adjustable array sizes, speed controls, and step-by-step tracing to make algorithm learning intuitive.",
      ],
      url: "https://jrescalona96.github.io/algovisualizations",
      tags: ["React", "Sass", "Material UI", "Algorithms"],
      category: "web" as ProjectCategory,
      links: [
        { label: "Live demo", url: "https://jrescalona96.github.io/algovisualizations" },
        { label: "GitHub", url: "https://github.com/jrescalona96/algovisualizations" },
      ] as ProjectLink[],
      techStack: ["React", "Sass", "Material UI"],
    },
    {
      id: id(),
      projectName: "lfti",
      description: [
        "Cross-platform Flutter workout application for managing routines with guided timers, session tracking, workout summaries, and Firebase-backed persistence. Deployed on Android with real-time data sync.",
      ],
      url: "https://wakay96.github.io/lfti/",
      tags: ["Flutter", "Firebase", "Dart", "Android"],
      category: "mobile" as ProjectCategory,
      links: [
        { label: "Live demo", url: "https://wakay96.github.io/lfti/" },
        { label: "GitHub", url: "https://github.com/wakay96/lfti" },
      ] as ProjectLink[],
      techStack: ["Flutter", "Firebase", "Dart"],
    },
    {
      id: id(),
      projectName: "Truss Solver",
      description: [
        "Engineering tool that calculates node displacements, internal and external forces, and stress distribution across structural trusses. Combines a Python numerical backend with an interactive React visualization frontend.",
      ],
      url: "https://jrescalona96.github.io/truss-solver/",
      tags: ["React", "Python", "Bootstrap", "Sass"],
      category: "tool" as ProjectCategory,
      links: [
        { label: "Live demo", url: "https://jrescalona96.github.io/truss-solver/" },
        { label: "GitHub", url: "https://github.com/jrescalona96/truss-solver" },
      ] as ProjectLink[],
      techStack: ["React", "Python", "Bootstrap", "Sass"],
    },
    {
      id: id(),
      projectName: "Debt Counter",
      description: [
        "Dashboard app for tracking debt with running totals, payment progress visualization, and configurable debt categories. Designed as a persistent financial motivator with clear visual indicators.",
      ],
      url: "https://jrescalona96.github.io/debtcounter/",
      tags: ["React", "CSS", "Bootstrap"],
      category: "web" as ProjectCategory,
      links: [
        { label: "Live demo", url: "https://jrescalona96.github.io/debtcounter/" },
        { label: "GitHub", url: "https://github.com/jrescalona96/debtcounter" },
      ] as ProjectLink[],
      techStack: ["React", "CSS", "Bootstrap"],
    },
    {
      id: id(),
      projectName: "The Shuffling",
      description: [
        "Magic: The Gathering deck builder app using the Scryfall API. Implements full CRUD operations for card collections, deck assembly, card search with filtering, and persistent collection management.",
      ],
      url: "https://www.youtube.com/watch?v=Tv1DGACwy1U",
      tags: ["JavaScript", "Node.js", "HTML", "CSS", "MongoDB"],
      category: "web" as ProjectCategory,
      links: [
        { label: "Demo video", url: "https://www.youtube.com/watch?v=Tv1DGACwy1U" },
      ] as ProjectLink[],
      techStack: ["JavaScript", "Node.js", "HTML", "CSS", "MongoDB"],
    },
  ];
}

export function getExperiences(): Experience[] {
  return [
    {
      id: id(),
      entity: "Mercury Insurance",
      role: "Software Developer II",
      location: "Brea, CA",
      type: "work" as ExperienceType,
      description: [
        "Accelerated QA testing workflow by enabling in-app environment switching, removing bottlenecks and reducing QA iteration time by 50%.",
        "Implemented Dependency Injection to increase unit test coverage from 0% to 70%, improving codebase maintainability and catching regressions earlier.",
        "Deployed an in-app feedback request system that drove a significant uptick in app store ratings and customer satisfaction.",
        "Led feature enablement strategy using low-code walkthroughs and Firebase Remote Config messaging, simplifying rollouts and improving adoption rates.",
        "Built an API mocking framework with Node.js/Express, enabling frontend teams to test edge cases independently of backend readiness.",
        "Optimized frontend performance by designing a dynamic theming and asset management system, reducing load times and ensuring brand consistency.",
      ],
      url: "https://cp.mercuryinsurance.com",
      startDate: 2021,
    },
    {
      id: id(),
      entity: "Cal Poly Pomona",
      location: "Pomona, CA",
      role: "B.S. Computer Science",
      type: "education" as ExperienceType,
      description: [
        "Coursework in algorithms, data structures, software engineering, operating systems, and database design.",
      ],
      url: "https://www.cpp.edu/aboutcpp/index.html",
      startDate: 2018,
      endDate: 2020,
    },
    {
      id: id(),
      entity: "Cerritos College",
      location: "Norwalk, CA",
      role: "Computer Science Transfer Program",
      type: "education" as ExperienceType,
      description: [
        "Completed lower-division CS coursework and transferred to Cal Poly Pomona to complete B.S. in Computer Science.",
      ],
      url: "https://www.cerritos.edu/",
      startDate: 2014,
      endDate: 2018,
    },
  ];
}

export function getSkills(): Skill[] {
  return [
    { id: id(), name: "JavaScript", category: "languages" },
    { id: id(), name: "TypeScript", category: "languages"  },
    { id: id(), name: "Java", category: "languages"  },
    { id: id(), name: "HTML", category: "languages"  },
    { id: id(), name: "CSS", category: "languages"  },
    { id: id(), name: "SQL", category: "languages"  },
    { id: id(), name: "Dart", category: "languages"  },
    { id: id(), name: "React", category: "frameworks"  },
    { id: id(), name: "Angular", category: "frameworks"  },
    { id: id(), name: "Flutter", category: "frameworks"  },
    { id: id(), name: "Node.js", category: "frameworks"  },
    { id: id(), name: "Spring Boot", category: "frameworks"  },
    { id: id(), name: "Tailwind", category: "frameworks"  },
    { id: id(), name: "Git", category: "tools"  },
    { id: id(), name: "Docker", category: "tools"  },
    { id: id(), name: "Jenkins", category: "tools"  },
    { id: id(), name: "Agile", category: "tools"  },
  ];
}

export function getSkillsByCategory(): CategorizedSkills {
  const skills = getSkills();
  return {
    languages: skills.filter((s) => s.category === "languages"),
    frameworks: skills.filter((s) => s.category === "frameworks"),
    tools: skills.filter((s) => s.category === "tools"),
  };
}
