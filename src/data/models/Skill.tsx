type Parameters = {
  id: string;
  name: string;
  isPrimary: boolean;
};

export class Skill {
  id!: string;
  name!: string;
  isPrimary!: boolean;

  constructor({ id, name, isPrimary }: Parameters) {
    this.id = id;
    this.name = name;
    this.isPrimary = isPrimary;
  }
}
