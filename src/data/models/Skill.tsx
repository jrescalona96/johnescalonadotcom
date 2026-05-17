export type SkillCategory = "languages" | "frameworks" | "tools";

type Parameters = {
  id: string;
  name: string;
  category: SkillCategory;
};

export class Skill {
  id!: string;
  name!: string;
  category!: SkillCategory;

  constructor({ id, name, category }: Parameters) {
    this.id = id;
    this.name = name;
    this.category = category;
  }
}
