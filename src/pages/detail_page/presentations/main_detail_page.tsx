import { useParams, useNavigate } from "react-router-dom";
import { projects, type Project } from "../../../core/data/design_data_list";
import Reveal from "../../../components/reveal";

function MainDetailPage() {
    const navigate = useNavigate();
    const { typeId, projectId } = useParams<{ typeId: string; projectId: string }>();

    const rawData: Project[] = typeId === "1" ? projects : [];
    const finalData: Project | undefined = rawData.find(data => data.id === projectId);

    if (!finalData) {
        return (
            <div className="detail-page">
                <p>Project not found.</p>
            </div>
        );
    }

    return (
        <div className="detail-page">
            <Reveal>
                <button className="primary-button go-back-button" onClick={() => navigate(-1)}>
                    Go Back
                </button>
            </Reveal>

            <section className="detail-project-section">
                <Reveal delay={100}>
                    <section className="thumbnail">
                        <img src={finalData.thumbnail} alt={finalData.title} className="detail-thumbnail" />
                    </section>
                </Reveal>
                <Reveal delay={200}>
                    <h1>{finalData.title}</h1>
                </Reveal>

                <Reveal delay={300}>
                    <section className="role-section">
                        <p className="role-label">Role:</p>
                        {finalData.roles.map(role => (
                            <p className="role-tag" key={role.title}>{role.title}</p>
                        ))}
                    </section>
                </Reveal>

                <Reveal delay={400}>
                    <section className="content-section">
                        <section className="brief-section">
                            <h2>Description</h2>
                            <p>{finalData.description}</p>

                            <section className="problems-section">
                                <h2>Problems to Solve</h2>
                                <ul>
                                    {finalData.problemsToSolve.map(problem => (
                                        <li key={problem}>{problem}</li>
                                    ))}
                                </ul>
                            </section>
                        </section>

                        <section className="interaction-section">
                            {typeId !== "1" && (
                                <button className="primary-button">
                                    Try this demo
                                </button>
                            )}
                            <button className="source-button">
                                View The Source
                            </button>
                        </section>
                    </section>
                </Reveal>
            </section>
        </div>
    );
}

export default MainDetailPage;
