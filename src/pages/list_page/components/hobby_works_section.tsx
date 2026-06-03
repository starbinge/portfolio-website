import { hobbyWorks } from "../../../core/data/hobby_works_data"
import Reveal from "../../../components/reveal"
import "./hobby_works_section.css"

function HobbyWorksSection() {
    return (
        <section className="hobby-works-section">
            <div className="hobby-works-intro">
                <Reveal>
                    <p className="hobby-works-overline">§ 03 — A No-Brief Corner</p>
                </Reveal>
                <Reveal delay={100}>
                    <h2 className="hobby-works-title">
                        Made for the<br />
                        <em>love of it.</em>
                    </h2>
                </Reveal>
                <Reveal delay={200}>
                    <p className="hobby-works-lede">
                        No client. No deadline. No brief. Just the quiet pleasure
                        of making a thing because the idea existed and wanted out.
                        Posters, illustrations, typographic doodles — whatever
                        the day asks for.
                    </p>
                </Reveal>
            </div>

            <div className="hobby-works-grid">
                {hobbyWorks.map((work, index) => (
                    <Reveal key={work.id} delay={index * 80}>
                        <article className="hobby-card">
                            <div className="hobby-card-image">
                                <img src={work.thumbnail} alt={work.title} />
                                <span className="hobby-card-medium">{work.medium}</span>
                            </div>
                            <div className="hobby-card-body">
                                <h3 className="hobby-card-title">{work.title}</h3>
                                <p className="hobby-card-meta">{work.year}</p>
                                {work.note && (
                                    <p className="hobby-card-note">"{work.note}"</p>
                                )}
                            </div>
                        </article>
                    </Reveal>
                ))}
            </div>
        </section>
    )
}

export default HobbyWorksSection
