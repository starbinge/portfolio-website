interface ShortTextInputProps {
    placeholder: string
    value?: string
    onChange: (value: string) => void
}

function ShortTextInput({ placeholder, value, onChange }: ShortTextInputProps) {
    return (
        <input
            type="text"
            className="short-text-input"
            placeholder={placeholder}
            value={value ?? ""}
            onChange={e => onChange(e.target.value)}
        />
    )
}

export default ShortTextInput
