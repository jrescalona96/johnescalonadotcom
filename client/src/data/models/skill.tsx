export type SkillCategory = "languages" | "frameworks" | "tools";

export type Skill = {
  id: string;
  name: string;
  category: SkillCategory;
};
