import { type Project } from "../models/project";
// import { getProjects } from "../repository/repository";
// import { API_BASE_URL, handleResponse } from "./base-service";
import { mockProjects, mockProjectById } from "./mock";

export async function fetchProjects(): Promise<Project[]> {
  // const response = await fetch(`${API_BASE_URL}/api/projects`);
  // return handleResponse<Project[]>(response);
  // return getProjects();
  return mockProjects;
}

export async function fetchProjectById(id: string, _type?: string): Promise<Project | undefined> {
  // const params = new URLSearchParams();
  // if (type) params.set("type", type);
  // const query = params.toString() ? `?${params.toString()}` : "";
  // const response = await fetch(`${API_BASE_URL}/api/projects/${id}${query}`);
  // return handleResponse<Project>(response);
  return mockProjectById[id];
}

