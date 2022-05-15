import { Image } from "./Image";

type ProjectParameters = {
	id: string;
	url?: string;
	projectName: string;
	description?: string;
	projectImage?: Image;
	projectIcon?: Image;
	techStackIcons?: Image[];
};

export class Project {
	id: string;
	projectName: string;
	description?: string;
	url?: string;
	projectImage?: Image;
	projectIcon?: Image;
	techStackLogos?: Image[];

	constructor({
		id,
		projectName,
		description,
		url,
		projectImage,
		projectIcon,
		techStackIcons: techStackLogos,
	}: ProjectParameters) {
		this.id = id;
		this.url = url;
		this.projectName = projectName;
		this.description = description;
		this.projectImage = projectImage;
		this.projectIcon = projectIcon;
		this.techStackLogos = techStackLogos;
	}
}
