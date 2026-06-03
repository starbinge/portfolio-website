import Reveal from "../../../components/reveal"
import SectionLabel from "../../../components/section_label";
import SchoolContainer from "../../../components/school_container";
import selfPhoto from "../../../assets/self-photos/file.jpg";
import whoIsMe from "../../../assets/title-design/who _is_me_.svg";
import logoUpi from "../../../assets/logos/logo_upi.svg";
import logoOpat from "../../../assets/logos/logo_opat.svg";

function BioSection() {
    return (
        <section className="bio-section">
            <Reveal>
                <div className="self-photo">
                    <img src={selfPhoto} className="self-photo-img" alt="self photo" />
                </div>
            </Reveal>
            <div className="biodata">
                <SectionLabel number="01" title="Who Is Me" caption="A short introduction">
                    <img src={whoIsMe} />
                </SectionLabel>
                <Reveal delay={250}>
                    <p>
                        I am a <span>software engineer and designer</span> who operates at <span>the intersection of clean code and impactful visual design.</span> Combining a technical background in software engineering with a strong passion for graphic design and UI/UX design, I focus on crafting seamless digital experiences where logic meets creativity. To me, development and design are a single, fluid process: design establishes the application's soul, user experience, and visual identity, while code builds the robust structural reality that brings it to life.</p>
                </Reveal>
                <section>
                    <Reveal delay={350}>
                        <SchoolContainer logo={logoUpi} major={"Software Engineer Major (Bachelor)"} schoolName={"The Education University of Indonesia"} startYear={2026} finishYear={"now"} />
                    </Reveal>
                    <Reveal delay={450}>
                        <SchoolContainer logo={logoOpat} major={"Software Engineer Major"} schoolName={"The 4th Public Vocational High School of Bandung"} startYear={2023} finishYear={2026} />
                    </Reveal>
                </section>
            </div>
        </section>
    );
}
export default BioSection;
