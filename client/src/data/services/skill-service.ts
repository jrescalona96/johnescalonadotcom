import { type Skill } from "../models/skill";
import { type CategorizedSkills } from "../repository/repository";
// import { getSkills, getSkillsByCategory } from "../repository/repository";
// import { API_BASE_URL, handleResponse } from "./base-service";
import { mockSkills, mockCategorizedSkills } from "./mock";

export async function fetchSkills(): Promise<Skill[]> {
  // const response = await fetch(`${API_BASE_URL}/api/skills`);
  // return handleResponse<Skill[]>(response);
  // return getSkills();
  return mockSkills;
}

export async function fetchSkillsByCategory(): Promise<CategorizedSkills> {
  // const skills = await fetchSkills();
  // return {
  //   languages: skills.filter((s) => s.category === "languages"),
  //   frameworks: skills.filter((s) => s.category === "frameworks"),
  //   tools: skills.filter((s) => s.category === "tools"),
  // };
  // return getSkillsByCategory();
  return mockCategorizedSkills;
}

