import { type Experience } from "../models/experience";
// import { getExperiences } from "../repository/repository";
// import { API_BASE_URL, handleResponse } from "./base-service";
import { mockExperiences, mockExperienceById } from "./mock";

export async function fetchExperiences(): Promise<Experience[]> {
  // const response = await fetch(`${API_BASE_URL}/api/experiences`);
  // return handleResponse<Experience[]>(response);
  // return getExperiences();
  return mockExperiences;
}

export async function fetchExperienceById(id: string, _type?: string): Promise<Experience | undefined> {
  // const params = new URLSearchParams();
  // if (type) params.set("type", type);
  // const query = params.toString() ? `?${params.toString()}` : "";
  // const response = await fetch(`${API_BASE_URL}/api/experiences/${id}${query}`);
  // return handleResponse<Experience>(response);
  return mockExperienceById[id];
}

