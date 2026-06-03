import Reveal from "../../../components/reveal"
import SchoolContainer from "../../../components/school_container";

function BioSection() {
    return (
        <section className="bio-section">
            <Reveal>
                <div className="self-photo">
                    <img src="src/assets/self-photos/file.jpg" className="self-photo-img" alt="self photo" />
                </div>
            </Reveal>
            <div className="biodata">
                <Reveal delay={150}>
                    <img src="src/assets/title-design/who _is_me_.svg" />
                </Reveal>
                <Reveal delay={250}>
                    <p>
                        I am a <span>software engineer and designer</span> who operates at <span>the intersection of clean code and impactful visual design.</span> Combining a technical background in software engineering with a strong passion for graphic design and UI/UX design, I focus on crafting seamless digital experiences where logic meets creativity. To me, development and design are a single, fluid process: design establishes the application's soul, user experience, and visual identity, while code builds the robust structural reality that brings it to life.</p>
                </Reveal>
                <section>
                    <Reveal delay={350}>
                        <SchoolContainer logo={"src/assets/logos/logo_upi.svg"} major={"Software Engineer Major (Bachelor)"} schoolName={"The Education University of Indonesia"} startYear={2026} finishYear={"now"} />
                    </Reveal>
                    <Reveal delay={450}>
                        <SchoolContainer logo={"src/assets/logos/logo_opat.svg"} major={"Software Engineer Major"} schoolName={"The 4th Public Vocational High School of Bandung"} startYear={2023} finishYear={2026} />
                    </Reveal>
                </section>
            </div>
        </section>
    );
}
export default BioSection;
