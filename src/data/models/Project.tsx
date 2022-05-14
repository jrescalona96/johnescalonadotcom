import { Image } from "./Image";

type ProjectParameters = {
	id: string;
	projectName: string;
	description?: string;
	projectImage?: Image;
	url?: string;
	logo?: Image;
};

export class Project {
	id: string;
	projectName: string;
	description?: string;
	url?: string;
	projectImage?: Image;
	logo?: Image;

	constructor({
		id,
		projectName,
		description,
		url,
		projectImage,
		logo,
	}: ProjectParameters) {
		this.id = id;
		this.projectName = projectName;
		this.description = description;
		this.url = url;
		this.projectImage = projectImage;
		this.logo = logo;
	}
}
