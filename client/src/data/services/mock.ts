import { type Project, type ProjectCategory, type ProjectLink } from "../models/project";
import { type Experience, type ExperienceType } from "../models/experience";
import { type Skill } from "../models/skill";
import { type Interest } from "../models/interest";
import { type CategorizedSkills } from "../repository/repository";

export const mockProjects: Project[] = [
  {
    id: "proj-1",
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
    id: "proj-2",
    projectName: "lfti",
    description: [
      "Cross-platform Flutter workout application for managing routines with guided timers, session tracking, workout summaries, and Firebase-backed persistence.",
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
    id: "proj-3",
    projectName: "Truss Solver",
    description: [
      "Engineering tool that calculates node displacements, internal and external forces, and stress distribution across structural trusses.",
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
    id: "proj-4",
    projectName: "Debt Counter",
    description: [
      "Dashboard app for tracking debt with running totals, payment progress visualization, and configurable debt categories.",
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
    id: "proj-5",
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

export const mockExperiences: Experience[] = [
  {
    id: "exp-1",
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
    id: "exp-2",
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
    id: "exp-3",
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

export const mockSkills: Skill[] = [
  { id: "skill-1", name: "JavaScript", category: "languages" },
  { id: "skill-2", name: "TypeScript", category: "languages" },
  { id: "skill-3", name: "Java", category: "languages" },
  { id: "skill-4", name: "HTML", category: "languages" },
  { id: "skill-5", name: "CSS", category: "languages" },
  { id: "skill-6", name: "SQL", category: "languages" },
  { id: "skill-7", name: "Dart", category: "languages" },
  { id: "skill-8", name: "React", category: "frameworks" },
  { id: "skill-9", name: "Angular", category: "frameworks" },
  { id: "skill-10", name: "Flutter", category: "frameworks" },
  { id: "skill-11", name: "Node.js", category: "frameworks" },
  { id: "skill-12", name: "Spring Boot", category: "frameworks" },
  { id: "skill-13", name: "Tailwind", category: "frameworks" },
  { id: "skill-14", name: "Git", category: "tools" },
  { id: "skill-15", name: "Docker", category: "tools" },
  { id: "skill-16", name: "Jenkins", category: "tools" },
  { id: "skill-17", name: "Agile", category: "tools" },
];

export const mockCategorizedSkills: CategorizedSkills = {
  languages: mockSkills.filter((s) => s.category === "languages"),
  frameworks: mockSkills.filter((s) => s.category === "frameworks"),
  tools: mockSkills.filter((s) => s.category === "tools"),
};

export const mockInterests: Interest[] = [
  {
    label: "Camping",
    url: "/interests/camping",
    description: "Exploring the outdoors and backpacking through national parks.",
    assets: [
      { id: "img-1", src: "/images/camping-1.jpg", label: "Mountain trail view" },
      { id: "img-2", src: "/images/camping-2.jpg", label: "Campfire at dusk" },
    ],
  },
  {
    label: "Photography",
    url: "/interests/photography",
    description: "Capturing landscapes and urban architecture.",
    assets: [
      { id: "img-3", src: "/images/photo-1.jpg", label: "City skyline at golden hour" },
    ],
  },
  {
    label: "Running",
    url: "/interests/running",
    description: "Training for marathons and trail running events.",
    assets: [
      { id: "img-4", src: "/images/run-1.jpg", label: "Trail running in the mountains" },
    ],
  },
];

export const mockProjectById: Record<string, Project> = Object.fromEntries(
  mockProjects.map((p) => [p.id, p]),
);

export const mockExperienceById: Record<string, Experience> = Object.fromEntries(
  mockExperiences.map((e) => [e.id, e]),
);
