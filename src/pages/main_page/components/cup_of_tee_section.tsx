import { useNavigate } from "react-router-dom";
import JobContainer from "../../../components/job_container"
import Reveal from "../../../components/reveal"
import SectionLabel from "../../../components/section_label";
import { routeConst } from "../../../core/constants/route_const";
import { ProjectInfo } from "../../list_page/data/project_data";
import cupOfTee from "../../../assets/title-design/cup_of_tee.svg";
import computerAscii from "../../../assets/asciiart/computer-ascii.svg";
import designIcon from "../../../assets/asciiart/DESIGN-ICON.svg";

function CupOfTeaSection() {
    const navigate = useNavigate();
    return (
        <section className="cup-of-tea-section">
            <SectionLabel number="02" title="A Cup of Tea" caption="What I bring to the table">
                <img id="title-vector" src={cupOfTee} />
            </SectionLabel>
            <section>
                <Reveal delay={150}>
                    <JobContainer
                        logoJob={computerAscii}
                        jobName="Programming"
                        onButtonClick={() => navigate(routeConst.list_project.to(ProjectInfo.programming.idProject))}
                    />
                </Reveal>
                <Reveal delay={250}>
                    <JobContainer
                        logoJob={designIcon}
                        jobName="Design"
                        onButtonClick={() => navigate(routeConst.list_project.to(ProjectInfo.design.idProject))}
                    />
                </Reveal>
            </section>
            <Reveal delay={400}>
                <blockquote className="cup-of-tea-quote">
                    "Immersing systemic problem solver product with beautifully done design to be more human."
                </blockquote>
            </Reveal>
        </section>
    );
}
export default CupOfTeaSection;
