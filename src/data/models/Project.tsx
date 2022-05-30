import { Image } from "./Image";
import { Video } from "./Video";

type Params = {
	id: string;
	url?: string;
	projectName: string;
	description?: string;
	projectMedia?: Image | Video;
	projectIcon?: Image;
	techStackLogos?: Image[];
};

export class Project {
	id: string;
	projectName: string;
	description?: string;
	url?: string;
	projectMedia?: Image | Video;
	projectIcon?: Image;
	techStackLogos?: Image[];

	constructor({
		id,
		projectName,
		description,
		url,
		projectMedia,
		projectIcon,
		techStackLogos,
	}: Params) {
		this.id = id;
		this.url = url;
		this.projectName = projectName;
		this.description = description;
		this.projectMedia = projectMedia;
		this.projectIcon = projectIcon;
		this.techStackLogos = techStackLogos;
	}
}
