import { useEffect, useState } from "react"
import "./toast.css"

export type ToastType = "success" | "error"

interface ToastProps {
    message: string
    type: ToastType
    onClose: () => void
    duration?: number
}

function Toast({ message, type, onClose, duration = 3000 }: ToastProps) {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        requestAnimationFrame(() => setVisible(true))
        const timer = setTimeout(() => {
            setVisible(false)
            setTimeout(onClose, 250)
        }, duration)
        return () => clearTimeout(timer)
    }, [duration, onClose])

    return (
        <div className={`toast toast-${type} ${visible ? "toast-show" : ""}`} role="status">
            <span className="toast-icon">
                {type === "success" ? "✓" : "✕"}
            </span>
            <span className="toast-message">{message}</span>
        </div>
    )
}

export default Toast
