import { useNavigate } from "react-router-dom";
import type { Project } from "../../../core/types/project_types";
import { routeConst } from "../../../core/constants/route_const";
import Reveal from "../../../components/reveal";

interface ListProjectSectionProps {
    projects: Project[];
    typeId: string;
}

function ListProjectSection({ projects, typeId }: ListProjectSectionProps) {
    const navigate = useNavigate();
    const data: Project[] = projects;
    return (
        <section className="directed-works">
            <div className="directed-works-intro">
                <Reveal>
                    <h2 className="directed-works-title">
                        Directed<br />
                        <em>works.</em>
                    </h2>
                </Reveal>
                <Reveal delay={100}>
                    <p className="directed-works-lede">
                        Projects with a brief, a client, and a problem worth
                        solving. Each one taught me something the next one
                        needed.
                    </p>
                </Reveal>
            </div>

            <div className="project-list">
                {data.map((project, index) => (
                    <Reveal key={project.id} delay={index * 100}>
                        <div className="project-container" onClick={() => navigate(routeConst.detail_project.to(typeId, project.id))}>
                            <div className="project-thumbnail">
                                <img src={project.thumbnail} alt={project.title} />
                            </div>
                            <section className="project-info">
                                <h1>{project.title}</h1>
                                <section className="role-section">
                                    <p className="role-label">Role:</p>
                                    {project.roles.map(role => (
                                        <p className="role-tag" key={role.title}>
                                            {role.title}
                                        </p>
                                    ))}
                                </section>
                                <p className="project-brief">{project.brief}</p>
                            </section>
                            {(project.links.behance || project.links.liveUrl || project.links.sourceUrl) && (
                                <a
                                    href={(project.links.behance ?? project.links.liveUrl ?? project.links.sourceUrl)!.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="primary-button read-more-button"
                                    onClick={e => e.stopPropagation()}
                                >
                                    {(project.links.behance ?? project.links.liveUrl ?? project.links.sourceUrl)!.label}
                                </a>
                            )}
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    )
}

export default ListProjectSection;
