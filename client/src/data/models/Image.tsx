import { Media } from "./interface/Media";

export class Image implements Media {
	public label?: string;
	public id?: string;
	public src?: string;

	constructor({ id, src, label }: Media) {
		this.id = id;
		this.src = src;
		this.label = label;
	}
}
