import { Image } from "./Image";

type Params = {
	label: string;
	url: string;
	description?: string;
	assets: Image[];
};

export class Interest {
	label: string;
	url: string;
	description?: string;
	assets: Image[];

	constructor({ label, url, description, assets }: Params) {
		this.label = label;
		this.url = url;
		this.description = description;
		this.assets = assets ?? [];
	}
}
