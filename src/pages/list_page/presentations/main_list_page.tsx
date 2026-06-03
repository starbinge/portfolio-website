import { useNavigate, useParams } from "react-router-dom";
import ListProjectSection from "../components/list_project_section";
import ToolsSection from "../components/tools_section";
import HobbyWorksSection from "../components/hobby_works_section";
import Reveal from "../../../components/reveal";
import SectionLabel from "../../../components/section_label";
import { getProjectsByType } from "../../../core/data/data_registry";

function ListPage() {
    const navigate = useNavigate();
    const { typeId } = useParams<{ typeId: string }>();
    const currentTypeId = typeId ?? "1";
    const projects = getProjectsByType(currentTypeId);

    return (
        <>
            <button className="breadcrumb-go-back" onClick={() => navigate(-1)} aria-label="Go back">
                Archive / Back
            </button>

            {currentTypeId === "1" && (
                <>
                    <SectionLabel number="§ 01" title="The Toolkit" caption="Starter pack" />
                    <Reveal delay={100}>
                        <ToolsSection />
                    </Reveal>
                    <Reveal delay={200}>
                        <p id="sub-text-list-page">Design makes our product more human, so it should be made by human.</p>
                    </Reveal>
                </>
            )}

            {currentTypeId === "2" && (
                <Reveal delay={200}>
                    <p id="sub-text-list-page">Code is just a tool. What matters is what you build with it.</p>
                </Reveal>
            )}

            <SectionLabel number={currentTypeId === "1" ? "§ 02" : "§ 01"} title="Selected Works" caption="A curated archive" />
            <Reveal delay={300}>
                <ListProjectSection projects={projects} typeId={currentTypeId} />
            </Reveal>

            {currentTypeId === "1" && <HobbyWorksSection />}
        </>
    );
}
export default ListPage;
