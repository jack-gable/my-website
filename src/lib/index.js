import { projectsPageData } from "@/projectData";

export const findProjectData = (name) => {
  return projectsPageData.find((project) => project.slug === name);
};
