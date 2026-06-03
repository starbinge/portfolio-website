import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar";
import ScrollToTop from "../components/scroll_to_top";

function MainLayout() {
    return (
        <>
            <ScrollToTop />
            <NavBar />
            <main>
                <Outlet />
            </main>
        </>
    );
}
export default MainLayout;