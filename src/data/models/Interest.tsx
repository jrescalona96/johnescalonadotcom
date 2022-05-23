import { Image } from "./Image";

export class Interest {
	label: string;
	url: string;
	description?: string;
	assets: Image[];

	constructor({
		label,
		url,
		description,
		assets,
	}: {
		label: string;
		url: string;
		description?: string;
		assets: Image[];
	}) {
		this.label = label;
		this.url = url;
		this.description = description;
		this.assets = assets ?? [];
	}
}
