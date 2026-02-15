export type ProjectCategory = "vitrine" | "ecommerce" | "logiciel";

export interface Project {
  slug: string;
  client: string;
  title: string;
  category: ProjectCategory;
  description: string;
  challenge: string;
  solution: string;
  technologies: string[];
  imgCover: string;
  imgArray: string[];
  date: string;
  year: number;
  link?: string;
  featured: boolean;
}

export interface Service {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: string;
}
