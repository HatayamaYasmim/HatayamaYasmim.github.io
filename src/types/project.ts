export type ProjectType = "professional" | "personal";

export interface Project {
  title: string;
  description: string;
  type: ProjectType;

  technologies: string[];

  highlights?: string[];

  role?: string[];

  github?: string;
  demo?: string;
}