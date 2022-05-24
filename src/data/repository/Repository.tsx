import { Project } from "../models/Project";
import { Image } from "../models/Image";
import { Interest } from "../models/Interest";
import { Endpoints } from "../../assets/constants/Endpoints";

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
			["css", new Image({ src: "./images/css3.png", label: "CSS3" })],
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
				found.id = this.generateRandomID.toString();
				list.push(found);
			}
		});

		return list;
	};

	getProjects = (): Project[] => {
		let projects: Project[] = [
			new Project({
				id: this.generateRandomID.toString(),
				projectName: "lfti",
				description:
					"Mobile Application to create, manage, and perform Workout routines. Available for both iOS & Android.",
				url: "https://wakay96.github.io/lfti/",
				projectImage: new Image({
					id: this.generateRandomID.toString(),
					src: "./images/lfti_app_store.png",
					label: "lfti",
				}),
				projectIcon: new Image({
					id: this.generateRandomID.toString(),
					src: "./images/lfti_logo.png",
					label: "lfti",
				}),
				techStackIcons: this.getTechStackIcons(["flutter", "firebase"]),
			}),
			new Project({
				id: this.generateRandomID.toString(),
				projectName: "Algo Visualization",
				description:
					"This react app visualizes some of the basic Computer Science Algorithms. Built using react, emphasizing on utilizing a functional approach to composing components using Hooks.",
				url: "https://jrescalona96.github.io/algovisualizations",
				projectImage: new Image({
					id: this.generateRandomID.toString(),
					src: "./images/algovizualization_screenshot.jpeg",
					label: "Algovisualization",
				}),
				projectIcon: new Image({
					id: this.generateRandomID.toString(),
					src: "./images/algo_logo.ico",
					label: "Algovisualization",
				}),
				techStackIcons: this.getTechStackIcons(["react", "sass", "materialui"]),
			}),
			new Project({
				id: this.generateRandomID.toString(),
				projectName: "Truss Solver",
				description:
					"Web application that calculates External and Internal Forces, Node Displacements and Stress for a Structural Truss formation based on node loads, then displays a projection of the resulting truss formation.",
				url: "https://jrescalona96.github.io/truss-solver/",
				projectImage: new Image({
					id: this.generateRandomID.toString(),
					src: "./images/truss_solver_1.png",
					label: "Truss Solver",
				}),
				projectIcon: new Image({
					id: this.generateRandomID.toString(),
					src: "./images/truss_solver_logo.ico",
					label: "Truss Solver",
				}),
				techStackIcons: this.getTechStackIcons([
					"react",
					"sass",
					"python",
					"bootstrap",
				]),
			}),
			new Project({
				id: this.generateRandomID.toString(),
				projectName: "Debt Counter",
				description:
					"This web app helps users keep track of their overall Debt by displaying to serve as a reminder to the user.",
				url: "https://jrescalona96.github.io/debtcounter/",
				projectImage: new Image({
					id: this.generateRandomID.toString(),
					src: "./images/debtcounter_dark_2.png",
					label: "Debt Counter",
				}),
				projectIcon: new Image({
					id: this.generateRandomID.toString(),
					src: "./images/debt_logo.ico",
					label: "Debt Counter",
				}),
				techStackIcons: this.getTechStackIcons(["react", "css", "bootstrap"]),
			}),
			new Project({
				id: this.generateRandomID.toString(),
				projectName: "The Shuffling",
				description:
					"A Magic: The Gathering Web application built using The Gathering API to virtually catalog Magic Cards.",
				url: "https://www.youtube.com/watch?v=Tv1DGACwy1U",
				projectImage: new Image({
					id: this.generateRandomID.toString(),
					src: "",
					label: "The Shuffling",
				}),
				projectIcon: new Image({
					id: this.generateRandomID.toString(),
					src: "./images/ts-logo.png",
					label: "The Shuffling",
				}),
				techStackIcons: this.getTechStackIcons([
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
				id: this.generateRandomID.toString(),
				src: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4470&q=80",
				label: "technology 📺",
			}),
			new Image({
				id: this.generateRandomID.toString(),
				src: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4498&q=80",
				label: "camping 🏕️",
			}),
			new Image({
				id: this.generateRandomID.toString(),
				src: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4275&q=80",
				label: "fitness 💪",
			}),
			new Image({
				id: this.generateRandomID.toString(),
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
						id: this.generateRandomID.toString(),
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
						id: this.generateRandomID.toString(),
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
						id: this.generateRandomID.toString(),
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
						id: this.generateRandomID.toString(),
						src: "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=5537&q=80",
						label: "coffee",
					}),
				],
			}),
		];

		return interests;
	};
}
