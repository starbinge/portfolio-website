import { useNavigate } from "react-router-dom"
import "./not_found.css"

function NotFoundPage() {
    const navigate = useNavigate()

    return (
        <section className="not-found-page">
            <div className="not-found-grid">
                <aside className="not-found-meta">
                    <p className="not-found-issue">Issue No. 404</p>
                    <p className="not-found-date">Vol. — Lost Pages</p>
                </aside>

                <div className="not-found-headline">
                    <span className="not-found-overline">A Brief Absence</span>
                    <h1 className="not-found-title">
                        The page<br />
                        you sought<br />
                        <em>is not here.</em>
                    </h1>
                    <p className="not-found-lede">
                        The link may be outdated, or the page may have moved
                        quietly between editions. Either way, this corner of
                        the archive is empty.
                    </p>
                </div>

                <div className="not-found-figure">
                    <span className="figure-number">Fig. 01</span>
                    <div className="figure-block">
                        <span className="big-404">404</span>
                    </div>
                    <p className="figure-caption">
                        An unrendered layout, captured in its natural state.
                    </p>
                </div>

                <div className="not-found-actions">
                    <button
                        className="not-found-button primary"
                        onClick={() => navigate("/")}
                    >
                        Return to Cover
                    </button>
                    <button
                        className="not-found-button ghost"
                        onClick={() => navigate(-1)}
                    >
                        ← Previous Page
                    </button>
                </div>

                <footer className="not-found-colophon">
                    <span>Set in Hedvig Letters Serif & Pixelify Sans</span>
                    <span>Printed digitally, somewhere off the map.</span>
                </footer>
            </div>
        </section>
    )
}

export default NotFoundPage
