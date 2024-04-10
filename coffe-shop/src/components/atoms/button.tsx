interface auxProps {
    label: string,
    children: React.ReactNode
}
export const Button = ({label, children}: auxProps) => {
    return (
        <button className="flex gap-2 p-2 rounded-md items-center text-gray-500 active:text-black hover:bg-gray-100 text-lg">
            {children}
            {label}
        </button>
    )
}