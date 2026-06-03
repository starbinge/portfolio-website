import { useNavigate } from "react-router-dom";
import ListProjectSection from "../components/list_project_section";
import ToolsSection from "../components/tools_section";
import Reveal from "../../../components/reveal";

function ListPage() {
    const navigate = useNavigate();
    return (
        <>
            <Reveal>
                <button className="primary-button go-back-button" onClick={() => navigate(-1)}>
                    Go Back
                </button>
            </Reveal>
            <Reveal delay={100}>
                <ToolsSection />
            </Reveal>
            <Reveal delay={200}>
                <p id="sub-text-list-page">Design makes our product more human, so it should be made by human.</p>
            </Reveal>
            <Reveal delay={300}>
                <ListProjectSection />
            </Reveal>
        </>
    );
}
export default ListPage;
