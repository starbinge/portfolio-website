import { useEffect, useRef, useState } from "react"
import type { ReactNode } from "react"
import "./reveal.css"

interface RevealProps {
    children: ReactNode
    delay?: number
    duration?: number
    className?: string
}

function Reveal({ children, delay = 0, duration = 600, className = "" }: RevealProps) {
    const ref = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const node = ref.current
        if (!node) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisible(true)
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
        )

        observer.observe(node)
        return () => observer.disconnect()
    }, [])

    return (
        <div
            ref={ref}
            className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
            style={{ transitionDelay: `${delay}ms`, transitionDuration: `${duration}ms` }}
        >
            {children}
        </div>
    )
}

export default Reveal
