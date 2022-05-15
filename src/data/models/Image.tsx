type ImageParameters = {
	id?: number;
	src: string;
	label: string;
};

export class Image {
	public id?: number;
	public src!: string;
	public label?: string;
	constructor({ id, src, label }: ImageParameters) {
		this.id = id;
		this.src = src;
		this.label = label;
	}
}
