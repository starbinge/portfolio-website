import { useState } from "react"
import ShortTextInput from "../../../components/short_text_input"
import TextArea from "../../../components/text_area"
import Toast from "../../../components/toast"
import type { ToastType } from "../../../components/toast"
import Reveal from "../../../components/reveal"
import { sendContactEmail } from "./services/email_service"

function ContactMeSection() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [sending, setSending] = useState(false)
    const [toast, setToast] = useState<{ message: string; type: ToastType } | null>(null)

    function showToast(message: string, type: ToastType) {
        setToast({ message, type })
    }

    async function handleSubmit(event: { preventDefault: () => void }) {
        event.preventDefault()

        if (!name || !email || !message) {
            showToast("Please fill in all fields.", "error")
            return
        }

        setSending(true)
        try {
            await sendContactEmail({ name, email, message })
            showToast("Message sent!", "success")
            setName("")
            setEmail("")
            setMessage("")
        } catch (err) {
            console.error(err)
            showToast("Something went wrong. Please try again.", "error")
        } finally {
            setSending(false)
        }
    }

    return (
        <section className="contact-me-section">
            <Reveal>
                <h1>Contact Me</h1>
            </Reveal>
            <Reveal delay={150}>
                <form id="input-form" onSubmit={handleSubmit}>
                    <section id="short-text-input-container">
                        <ShortTextInput
                            placeholder="Your Name"
                            value={name}
                            onChange={setName}
                        />
                        <ShortTextInput
                            placeholder="Your Email"
                            value={email}
                            onChange={setEmail}
                        />
                    </section>
                    <TextArea
                        placeholder="Your Message"
                        value={message}
                        onChange={setMessage}
                    />
                    <section id="submit-button">
                        <button type="submit" className="primary-button" disabled={sending}>
                            {sending ? "sending..." : "submit"}
                        </button>
                    </section>
                </form>
            </Reveal>
            <section className="contact-person">
                <section>
                    <p id="email">starbingebussiness@gmail.com</p>
                    <p id="instagram">Instagram : @starbingee</p>
                </section>
                <section>
                    <p id="phone">+62-888-0996-9882</p>
                    <p id="behance">Behance :  starbinge design</p>
                </section>
            </section>

            {toast && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={() => setToast(null)}
                />
            )}
        </section>
    )
}

export default ContactMeSection
