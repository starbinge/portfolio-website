import type { Project } from "../types/project_types";
import { projects as designProjects } from "./design_data_list";
import { programmingProjects } from "./programming_data_list";

type ProjectRegistry = Record<string, Project[]>;

const registry: ProjectRegistry = {
    "1": designProjects,
    "2": programmingProjects,
};

export function getProjectsByType(typeId: string): Project[] {
    return registry[typeId] ?? [];
}
