export default function TextInput({ type, id, placeholder, className, onChange }) {
    return (
        <input type={type} id={id} placeholder={placeholder} className={`border p-2 rounded mt-1 ${className}`} onChange={onChange} />
    )
}