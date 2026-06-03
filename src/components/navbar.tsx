import { useNavigate } from "react-router-dom";
import { routeConst } from "../core/constants/route_const";
import { ProjectInfo } from "../pages/list_page/data/project_data";

function NavBar() {
    const navigate = useNavigate();
    return (
        <nav className="nav-bar">
            <section>
                <button className="link-hint" onClick={() => navigate(routeConst.list_project.to(ProjectInfo.programming.idProject))}>Programming</button>
                <button className="link-hint" onClick={() => navigate(routeConst.list_project.to(ProjectInfo.design.idProject))}>Design</button>
            </section>
            <button className="primary-button" onClick={() => {
                const section = document.getElementById("contact-section")
                if (section) section.scrollIntoView({ behavior: "smooth" })
                else navigate("/")
            }}>
                Contact Me
            </button>
        </nav>
    );
}
export default NavBar;