export const routeConst = {
    root: {
        path: "/",
        to: () => "/",
    },
    list_project: {
        path: "/list-project/:typeId",
        to: (typeId: string) => `/list-project/${typeId}`,
    },
    detail_project: {
        path: "/detail-project/:typeId/:projectId",
        to: (typeId: string, projectId: string) => `/detail-project/${typeId}/${projectId}`,
    },
    not_found: {
        path: "*",
        to: () => "/404",
    },
}
