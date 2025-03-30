import { StaticImageData } from "next/image";

export type Tevent = {
  title: string;
  date: string;
  images: StaticImageData[];
  descriptions: string[];
  link?: string;
};
