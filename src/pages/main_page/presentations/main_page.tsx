import BioSection from "../components/bio_section";
import ContactMeSection from "../components/contact_me_section";
import CupOfTeaSection from "../components/cup_of_tee_section";
import HeroSection from "../components/hero_section";
import Reveal from "../../../components/reveal";

function MainPage() {
    return (
        <>
            <Reveal>
                <HeroSection />
            </Reveal>
            <Reveal delay={100}>
                <BioSection />
            </Reveal>
            <Reveal delay={200}>
                <CupOfTeaSection />
            </Reveal>
            <Reveal delay={300}>
                <ContactMeSection />
            </Reveal>
        </>
    )
}
export default MainPage;
