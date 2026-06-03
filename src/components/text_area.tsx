interface TextAreaProps {
    placeholder: string
    value?: string
    onChange: (value: string) => void
}

function TextArea({ placeholder, value, onChange }: TextAreaProps) {
    return (
        <textarea
            className="text-area"
            placeholder={placeholder}
            value={value ?? ""}
            onChange={e => onChange(e.target.value)}
        />
    )
}

export default TextArea
