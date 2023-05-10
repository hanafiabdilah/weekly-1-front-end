export default function PrimaryButton({ className, children }) {
    return (
        <button className={`bg-pink-500 hover:bg-pink-600 transition py-2 text-white font-medium rounded ${className}`}>{children}</button>
    )
}