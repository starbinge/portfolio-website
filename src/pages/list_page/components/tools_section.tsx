import DesignStarterpacks from '../../../core/data/starterpack_design_data';
import StarterPack from '/src/assets/title-design/design stater pack.svg';
import Reveal from "../../../components/reveal";

function ToolsSection() {
    const tools = DesignStarterpacks;
    return (
        <section className="starter-pack-section">
            <Reveal>
                <img src={StarterPack} alt="Design Starter Pack" className="starter-pack-title" />
            </Reveal>
            <section className="tools-grid">
                {tools.map((tool, index) => (
                    <Reveal key={tool.tool_name} delay={index * 80}>
                        <div className="tool-card">
                            <img src={tool.tool_image} alt={tool.tool_name} />
                            <span className="tool-tooltip">{tool.tool_name}</span>
                        </div>
                    </Reveal>
                ))}
            </section>
        </section>
    )
}
export default ToolsSection;
