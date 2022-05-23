type ImageParameters = {
	id?: string;
	src: string;
	label: string;
};

export class Image {
	public id?: string;
	public src!: string;
	public label?: string;
	constructor({ id, src, label }: ImageParameters) {
		this.id = id;
		this.src = src;
		this.label = label;
	}
}
