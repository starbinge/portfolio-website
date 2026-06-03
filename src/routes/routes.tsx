
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main_layout";
import { routeConst } from "../core/constants/route_const";

const MainPage = lazy(() => import("../pages/main_page/presentations/main_page"));
const ListPage = lazy(() => import("../pages/list_page/presentations/main_list_page"));
const DetailPage = lazy(() => import("../pages/detail_page/presentations/main_detail_page"));
const NotFoundPage = lazy(() => import("../pages/not_found_page/presentations/not_found_page"));

export const router = createBrowserRouter([
    {
        path: routeConst.root.path,
        Component: MainLayout,
        children: [
            { index: true, element: <Suspense><MainPage /></Suspense> },
            { path: routeConst.list_project.path, element: <Suspense><ListPage /></Suspense> },
            { path: routeConst.detail_project.path, element: <Suspense><DetailPage /></Suspense> }
        ]
    },
    {
        path: "*",
        element: <Suspense><NotFoundPage /></Suspense>
    }
]);
