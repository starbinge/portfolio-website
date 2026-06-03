
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main_layout";
import MainPage from "../pages/main_page/presentations/main_page";
import { routeConst } from "../core/constants/route_const";
import ListPage from "../pages/list_page/presentations/main_list_page";

export const router = createBrowserRouter([
    {
        path: routeConst.root.path,
        Component: MainLayout,
        children: [
            { Component: MainPage, index: true },
            { path: routeConst.list_project.path, Component: ListPage }
        ]
    }
]);
