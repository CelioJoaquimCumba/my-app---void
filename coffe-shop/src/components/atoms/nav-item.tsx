export const NavItem = ({label, active=false}: { label: string, active?: boolean }) => {
    return (
        <li className={`cursor-pointer font-normal text-lg ${active ? 'text-black' : 'text-gray-500'} hover:bg-gray-50 rounded-md active:bg-gray-100 active:text-black p-4`}>
            {label}
        </li>
    )
}