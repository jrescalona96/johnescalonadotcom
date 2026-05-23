import { Image } from "./image";
import { Video } from "./video";

export type ProjectCategory = "web" | "mobile" | "tool";

export type ProjectLink = {
  label: string;
  url: string;
};

type Params = {
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

export class Project {
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

  constructor({
    id,
    projectName,
    description,
    url,
    projectMedia,
    projectIcon,
    techStackLogos,
    tags,
    category,
    links,
    techStack,
  }: Params) {
    this.id = id;
    this.projectName = projectName;
    this.description = description;
    this.url = url;
    this.projectMedia = projectMedia;
    this.projectIcon = projectIcon;
    this.techStackLogos = techStackLogos;
    this.tags = tags;
    this.category = category;
    this.links = links;
    this.techStack = techStack;
  }
}
