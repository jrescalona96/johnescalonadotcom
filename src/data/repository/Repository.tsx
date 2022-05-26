import { Project } from "../models/Project";
import { Image } from "../models/Image";
import { Interest } from "../models/Interest";
import { Endpoints, ExtEndpoints } from "../../assets/constants/Endpoints";
import { Experience } from "../models/Experience";
import { Skill } from "../models/Skill";
import generate from "../../../node_modules/@types/babel__generator/index.d";

export class Repository {
	private static instance: Repository;

	private constructor() {}

	public static getInstance(): Repository {
		if (!Repository.instance) {
			Repository.instance = new Repository();
		}
		return Repository.instance;
	}

	public generateRandomID = (): string => {
		const id = "_" + Math.random().toString(36).substring(2, 9);
		return id.toString();
	};

	getTechStackIcons = (keys: string[]): Image[] => {
		const techStackIcons: Map<string, Image> = new Map<string, Image>([
			["mongodb", new Image({ src: "./images/mongodb.png", label: "MongoDB" })],
			["css", new Image({ src: "./images/css3.png", label: "CSS" })],
			[
				"firebase",
				new Image({ src: "./images/firebase.png", label: "Firebase" }),
			],
			["flutter", new Image({ src: "./images/flutter.png", label: "Flutter" })],
			["html", new Image({ src: "./images/html.png", label: "HTML" })],
			["java", new Image({ src: "./images/java.png", label: "Java" })],
			["js", new Image({ src: "./images/js.png", label: "Javascript" })],
			[
				"tailwind",
				new Image({ src: "./images/tailwind.png", label: "Tailwind CSS" }),
			],
			["react", new Image({ src: "./images/react.png", label: "ReactJS" })],
			["sass", new Image({ src: "./images/sass.png", label: "Sass" })],
			[
				"materialui",
				new Image({ src: "./images/materialui.png", label: "Material UI" }),
			],
			["python", new Image({ src: "./images/python.png", label: "Python" })],
			[
				"bootstrap",
				new Image({ src: "./images/bootstrap.png", label: "Bootstrap" }),
			],
			["node", new Image({ src: "./images/node.png", label: "NodeJS" })],
		]);

		let list: Image[] = [];

		keys.forEach((k) => {
			let found = techStackIcons.get(k);
			if (found) {
				found.id = this.generateRandomID();
				list.push(found);
			}
		});

		return list;
	};

	getProjects = (): Project[] => {
		let projects: Project[] = [
			new Project({
				id: this.generateRandomID(),
				projectName: "lfti",
				description:
					"Mobile Application to create, manage, and perform Workout routines. Available for both iOS & Android.",
				url: "https://wakay96.github.io/lfti/",
				projectImage: new Image({
					id: this.generateRandomID(),
					src: "./images/lfti_app_store.png",
					label: "lfti",
				}),
				projectIcon: new Image({
					id: this.generateRandomID(),
					src: "./images/lfti_logo.png",
					label: "lfti",
				}),
				techStackLogos: this.getTechStackIcons(["flutter", "firebase"]),
			}),
			new Project({
				id: this.generateRandomID(),
				projectName: "Algo Visualization",
				description:
					"This react app visualizes some of the basic Computer Science Algorithms. Built using react, emphasizing on utilizing a functional approach to composing components using Hooks.",
				url: "https://jrescalona96.github.io/algovisualizations",
				projectImage: new Image({
					id: this.generateRandomID(),
					src: "./images/algovizualization_screenshot.jpeg",
					label: "Algovisualization",
				}),
				projectIcon: new Image({
					id: this.generateRandomID(),
					src: "./images/algo_logo.ico",
					label: "Algovisualization",
				}),
				techStackLogos: this.getTechStackIcons(["react", "sass", "materialui"]),
			}),
			new Project({
				id: this.generateRandomID(),
				projectName: "Truss Solver",
				description:
					"Web application that calculates External and Internal Forces, Node Displacements and Stress for a Structural Truss formation based on node loads, then displays a projection of the resulting truss formation.",
				url: "https://jrescalona96.github.io/truss-solver/",
				projectImage: new Image({
					id: this.generateRandomID(),
					src: "./images/truss_solver_1.png",
					label: "Truss Solver",
				}),
				projectIcon: new Image({
					id: this.generateRandomID(),
					src: "./images/truss_solver_logo.ico",
					label: "Truss Solver",
				}),
				techStackLogos: this.getTechStackIcons([
					"react",
					"sass",
					"python",
					"bootstrap",
				]),
			}),
			new Project({
				id: this.generateRandomID(),
				projectName: "Debt Counter",
				description:
					"This web app helps users keep track of their overall Debt by displaying to serve as a reminder to the user.",
				url: "https://jrescalona96.github.io/debtcounter/",
				projectImage: new Image({
					id: this.generateRandomID(),
					src: "./images/debtcounter_dark_2.png",
					label: "Debt Counter",
				}),
				projectIcon: new Image({
					id: this.generateRandomID(),
					src: "./images/debt_logo.ico",
					label: "Debt Counter",
				}),
				techStackLogos: this.getTechStackIcons(["react", "css", "bootstrap"]),
			}),
			new Project({
				id: this.generateRandomID(),
				projectName: "The Shuffling",
				description:
					"A Magic: The Gathering Web application built using The Gathering API to virtually catalog Magic Cards.",
				url: "https://www.youtube.com/watch?v=Tv1DGACwy1U",
				projectImage: new Image({
					id: this.generateRandomID(),
					src: "",
					label: "The Shuffling",
				}),
				projectIcon: new Image({
					id: this.generateRandomID(),
					src: "./images/ts-logo.png",
					label: "The Shuffling",
				}),
				techStackLogos: this.getTechStackIcons([
					"js",
					"node",
					"html",
					"css",
					"mongodb",
				]),
			}),
		];
		return projects;
	};

	getInterestImages = (): Image[] => {
		const interestImages: Image[] = [
			new Image({
				id: this.generateRandomID(),
				src: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4470&q=80",
				label: "technology 📺",
			}),
			new Image({
				id: this.generateRandomID(),
				src: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4498&q=80",
				label: "camping 🏕️",
			}),
			new Image({
				id: this.generateRandomID(),
				src: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4275&q=80",
				label: "fitness 💪",
			}),
			new Image({
				id: this.generateRandomID(),
				src: "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=5537&q=80",
				label: "coffee ☕",
			}),
		];

		return interestImages;
	};

	getInterests = (): Interest[] => {
		const interests: Interest[] = [
			new Interest({
				label: "Technology 📺",
				url: Endpoints.home,
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam massa, lobortis sed purus pharetra, venenatis varius metus. Vivamus libero turpis, molestie id risus ut, interdum dignissim dolor. Aliquam accumsan.",
				assets: [
					new Image({
						id: this.generateRandomID(),
						src: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4470&q=80",
						label: "technology",
					}),
				],
			}),
			new Interest({
				label: "Camping 🏕️",
				url: Endpoints.camping,
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam massa, lobortis sed purus pharetra, venenatis varius metus. Vivamus libero turpis, molestie id risus ut, interdum dignissim dolor. Aliquam accumsan.",
				assets: [
					new Image({
						id: this.generateRandomID(),
						src: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4498&q=80",
						label: "camping",
					}),
				],
			}),
			new Interest({
				label: "Fitness 💪",
				url: Endpoints.fitness,
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam massa, lobortis sed purus pharetra, venenatis varius metus. Vivamus libero turpis, molestie id risus ut, interdum dignissim dolor. Aliquam accumsan.",
				assets: [
					new Image({
						id: this.generateRandomID(),
						src: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4275&q=80",
						label: "fitness",
					}),
				],
			}),
			new Interest({
				label: "Coffee ☕",
				url: Endpoints.coffee,
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam massa, lobortis sed purus pharetra, venenatis varius metus. Vivamus libero turpis, molestie id risus ut, interdum dignissim dolor. Aliquam accumsan.",
				assets: [
					new Image({
						id: this.generateRandomID(),
						src: "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=5537&q=80",
						label: "coffee",
					}),
				],
			}),
		];

		return interests;
	};

	getProfessionalExperiences = (): Experience[] => {
		const experiences: Experience[] = [
			new Experience({
				id: this.generateRandomID(),
				entity: "Mercury Insurace",
				title: "Software Developer Analyst Associate",
				location: "Brea, CA",
				description: [
					"Successfully implemented feature to provide the ability to provide in-app feedback that increased mobile app store reviews as well as overall app ratings.",
					"Successfully implemented in-app walkthroughs to increase adoption of new features and dynamic messages to customers allowing business to make changes without code changes.",
					"Successfully integrated mobile app enhancement to allow customers to make changes to their policies using webview technology.",
				],
				url: ExtEndpoints.mercury,
				startDate: 2021,
			}),
			new Experience({
				id: this.generateRandomID(),
				entity: "PRSE, Inc.",
				title: "AutoCAD Drafter",
				location: "Tustin, CA",
				description: [
					"Prepare and maintain Structural construction plan sets per Engineering designs.",
				],
				url: ExtEndpoints.prse,
				startDate: 2019,
				endDate: 2021,
			}),
			new Experience({
				id: this.generateRandomID(),
				entity: "EFI Global",
				title: "AutoCAD Drafter",
				location: "Los Angeles, CA",
				description: [
					"Create, modify, and maintain technical drawings such as site plans, boring logs, cross-section views, and various other CAD-related work for project managers.",
					"Produce Methane Mitigation designs for various locations in Los Angeles.",
				],
				url: ExtEndpoints.efi,
				startDate: 2014,
				endDate: 2019,
			}),
		];
		return experiences;
	};

	getAcademicExperiences = (): Experience[] => {
		const schools: Experience[] = [
			new Experience({
				id: this.generateRandomID(),
				entity: "Cal Poly Pomona",
				location: "Pomona, CA",
				description: [
					"B.S. Computer Science",
					"Cumulative GPA: 3.70",
					"Magna Cum Laude",
				],
				url: ExtEndpoints.cpp,
				startDate: 2018,
				endDate: 2020,
			}),
			new Experience({
				id: this.generateRandomID(),
				entity: "Cerritos College",
				location: "Norwalk, CA",
				description: [
					"Computer Science Transfer Program",
					"Cumulative GPA: 3.78",
				],
				url: ExtEndpoints.cc,
				startDate: 2014,
				endDate: 2018,
			}),
		];
		return schools;
	};

	getSkills = (): Skill[] => {
		const skills: Skill[] = [
			new Skill({
				id: this.generateRandomID(),
				name: "Flutter/ Dart",
				isPrimary: true,
			}),
			new Skill({
				id: this.generateRandomID(),
				name: "JavaScript/ React",
				isPrimary: true,
			}),
			new Skill({ id: this.generateRandomID(), name: "HTML", isPrimary: true }),
			new Skill({ id: this.generateRandomID(), name: "CSS", isPrimary: true }),
			new Skill({
				id: this.generateRandomID(),
				name: "Tailwind",
				isPrimary: true,
			}),
			new Skill({ id: this.generateRandomID(), name: "Git", isPrimary: true }),
			new Skill({
				id: this.generateRandomID(),
				name: "Bootstrap",
				isPrimary: false,
			}),
			new Skill({
				id: this.generateRandomID(),
				name: "Java/Spring Boot",
				isPrimary: false,
			}),
			new Skill({
				id: this.generateRandomID(),
				name: "Python",
				isPrimary: false,
			}),
			new Skill({ id: this.generateRandomID(), name: "C++", isPrimary: false }),
			new Skill({ id: this.generateRandomID(), name: "C#", isPrimary: false }),
			new Skill({
				id: this.generateRandomID(),
				name: "NoSQL",
				isPrimary: false,
			}),
			new Skill({ id: this.generateRandomID(), name: "SQL", isPrimary: false }),
			new Skill({
				id: this.generateRandomID(),
				name: "NodeJS",
				isPrimary: false,
			}),
			new Skill({
				id: this.generateRandomID(),
				name: "JavaScript/ Angular",
				isPrimary: false,
			}),
			new Skill({
				id: this.generateRandomID(),
				name: "SASS",
				isPrimary: false,
			}),
			new Skill({
				id: this.generateRandomID(),
				name: "Material UI",
				isPrimary: false,
			}),
			new Skill({
				id: this.generateRandomID(),
				name: "ExpressJS",
				isPrimary: false,
			}),
			new Skill({
				id: this.generateRandomID(),
				name: "AutoCad",
				isPrimary: true,
			}),
		];

		return skills;
	};
}
