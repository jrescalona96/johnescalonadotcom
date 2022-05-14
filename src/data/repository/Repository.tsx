import { Project } from "../models/Project";
import { Image } from "../models/Image";

export class Repository {
	private static instance: Repository;

	private constructor() {}

	public static getInstance(): Repository {
		if (!Repository.instance) {
			Repository.instance = new Repository();
		}
		return Repository.instance;
	}

	getProjects = (): Project[] => {
		let projects: Project[] = [
			new Project({
				id: "1",
				projectName: "lfti",
				description:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
				url: "https://wakay96.github.io/lfti/",
				projectImage: new Image({
					id: 1,
					src: "./images/lfti_app_store.png",
					label: "lfti",
				}),
				logo: new Image({
					id: 1,
					src: "./images/lfti_logo.png",
					label: "lfti",
				}),
			}),
			new Project({
				id: "2",
				projectName: "Truss Solver",
				description:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
				url: "https://jrescalona96.github.io/truss-solver/",
				projectImage: new Image({
					id: 1,
					src: "./images/truss_solver_2.png",
					label: "Truss Solver",
				}),
				logo: new Image({
					id: 1,
					src: "./images/truss_solver_logo.ico",
					label: "Truss Solver",
				}),
			}),
			new Project({
				id: "3",
				projectName: "Debt Counter",
				description:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
				url: "https://jrescalona96.github.io/debtcounter/",
				projectImage: new Image({
					id: 1,
					src: "./images/debtcounter_dark_2.png",
					label: "Debt Counter",
				}),
				logo: new Image({
					id: 1,
					src: "./images/debt_logo.ico",
					label: "Debt Counter",
				}),
			}),
			new Project({
				id: "4",
				projectName: "Algovisualization",
				description:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
				url: "https://jrescalona96.github.io/algovisualizations",
				projectImage: new Image({
					id: 1,
					src: "./images/algovizualization_screenshot.jpeg",
					label: "Algovisualization",
				}),
				logo: new Image({
					id: 1,
					src: "./images/algo_logo.ico",
					label: "Algovisualization",
				}),
			}),
		];
		return projects;
	};

	getInterestImages = (): Image[] => {
		const interestImages: Image[] = [
			new Image({
				id: 0,
				src: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4470&q=80",
				label: "technology 📺",
			}),
			new Image({
				id: 1,
				src: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4498&q=80",
				label: "camping 🏕️",
			}),
			new Image({
				id: 2,
				src: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4275&q=80",
				label: "fitness 💪",
			}),
			new Image({
				id: 3,
				src: "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=5537&q=80",
				label: "coffee ☕",
			}),
		];

		return interestImages;
	};
}
