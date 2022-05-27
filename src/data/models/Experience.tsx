type Params = {
	id?: string;
	entity: string;
	role?: string;
	location: string;
	description: string[];
	url: string;
	startDate: number;
	endDate?: number;
};

export class Experience {
	public id?: string;
	public entity!: string;
	public role?: string;
	public location?: string;
	public description!: string[];
	public url?: string;
	public startDate!: number;
	public endDate?: number;

	constructor({
		id,
		entity,
		role,
		location,
		description,
		url,
		startDate,
		endDate,
	}: Params) {
		this.id = id;
		this.entity = entity;
		this.role = role;
		this.location = location;
		this.description = description;
		this.url = url;
		this.startDate = startDate;
		this.endDate = endDate;
	}
}
