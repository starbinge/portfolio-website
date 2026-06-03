export const routeConst = {
    root: {
        path: "/",
        to: () => "/",
    },
    list_project: {
        path: "/list-project/:typeId",
        to: (typeId: string) => `/list-project/${typeId}`,
    },
}
