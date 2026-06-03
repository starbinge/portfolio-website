import type { ProjectType } from "../../../core/types/project_types";

interface ProjectInfoInterface {
    design: ProjectType,
    programming: ProjectType
}

export const ProjectInfo: ProjectInfoInterface = {
    design: {
        idProject: "1",
        projectName: "design-project"
    },
    programming: {
        idProject: "2",
        projectName: "programming-project"
    }
} 