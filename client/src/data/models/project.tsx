import { Image } from "./image";
import { Video } from "./video";

export type ProjectCategory = "web" | "mobile" | "tool";

export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  id: string;
  projectName: string;
  description?: string[];
  url?: string;
  projectMedia?: Image | Video;
  projectIcon?: Image;
  techStackLogos?: Image[];
  tags?: string[];
  category?: ProjectCategory;
  links?: ProjectLink[];
  techStack?: string[];
};
