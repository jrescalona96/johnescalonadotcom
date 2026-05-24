import { type Interest } from "../models/interest";
// import { API_BASE_URL, handleResponse } from "./base-service";
import { mockInterests } from "./mock";

export async function fetchInterests(): Promise<Interest[]> {
  // const response = await fetch(`${API_BASE_URL}/api/interests`);
  // return handleResponse<Interest[]>(response);
  return mockInterests;
}
