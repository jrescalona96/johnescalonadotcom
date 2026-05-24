export type ExperienceType = "work" | "education";

export type Experience = {
  id?: string;
  entity: string;
  role?: string;
  location?: string;
  description: string[];
  url?: string;
  startDate?: number;
  endDate?: number;
  type?: ExperienceType;
  previousRoles?: Experience[];
};
