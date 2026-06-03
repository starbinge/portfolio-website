import type { ReactNode } from "react"
import "./section_label.css"

interface SectionLabelProps {
    number: string
    title: string
    caption?: string
    children?: ReactNode
}

function SectionLabel({ number, title, caption, children }: SectionLabelProps) {
    return (
        <div className="section-label-wrapper">
            <header className="section-label">
                <span className="section-label-number">§ {number}</span>
                <span className="section-label-title">{title}</span>
                {caption && <span className="section-label-caption">— {caption}</span>}
            </header>
            {children}
        </div>
    )
}

export default SectionLabel
