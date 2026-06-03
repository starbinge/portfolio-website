import { useNavigate } from "react-router-dom";
import JobContainer from "../../../components/job_container"
import Reveal from "../../../components/reveal"
import { routeConst } from "../../../core/constants/route_const";
import { ProjectInfo } from "../../list_page/data/project_data";

function CupOfTeaSection() {
    const navigate = useNavigate();
    return (
        <section className="cup-of-tea-section">
            <Reveal>
                <img id="title-vector" src="src/assets/title-design/cup_of_tee.svg" />
            </Reveal>
            <section>
                <Reveal delay={150}>
                    <JobContainer
                        logoJob="src/assets/asciiart/computer-ascii.svg"
                        jobName="Programming"
                        onButtonClick={() => console.log("Programming details")}
                    />
                </Reveal>
                <Reveal delay={250}>
                    <JobContainer
                        logoJob="src/assets/asciiart/DESIGN-ICON.svg"
                        jobName="Design"
                        onButtonClick={() => navigate(routeConst.list_project.to(ProjectInfo.design.idProject))}
                    />
                </Reveal>
            </section>
            <Reveal delay={400}>
                <p>
                    Immersing systemic problem solver product with beautifully done design to be more human.
                </p>
            </Reveal>
        </section>
    );
}
export default CupOfTeaSection;
