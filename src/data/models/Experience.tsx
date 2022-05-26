type Params = {
	id?: string;
	entity: string;
	title?: string;
	location: string;
	description: string[];
	url: string;
	startDate: number;
	endDate?: number;
};

export class Experience {
	public id?: string;
	public entity!: string;
	public title?: string;
	public location?: string;
	public description!: string[];
	public url?: string;
	public startDate!: number;
	public endDate?: number;

	constructor({
		id,
		entity,
		title,
		location,
		description,
		url,
		startDate,
		endDate,
	}: Params) {
		this.id = id;
		this.entity = entity;
		this.title = title;
		this.location = location;
		this.description = description;
		this.url = url;
		this.startDate = startDate;
		this.endDate = endDate;
	}
}
