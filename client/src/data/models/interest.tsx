import { Image } from "./image";

export type Interest = {
  label: string;
  url: string;
  description?: string;
  assets: Image[];
};
