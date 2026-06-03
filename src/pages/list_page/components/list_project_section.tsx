import { projects, type Project } from "../../../core/data/design_data_list";
import Reveal from "../../../components/reveal";

function ListProjectSection() {
    const data: Project[] = projects;
    return (
        <section className="project-list">
            {data.map((project, index) => (
                <Reveal key={project.id} delay={index * 100}>
                    <div className="project-container">
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
                        {project.links.behance && (
                            <a
                                href={project.links.behance.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="primary-button read-more-button"
                            >
                                {project.links.behance.label}
                            </a>
                        )}
                    </div>
                </Reveal>
            ))}
        </section>

    )
}

export default ListProjectSection;
