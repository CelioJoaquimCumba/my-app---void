import Logo from '../../assets/logo.png'
import { Button } from '../atoms/button'
import { NavItem } from '../atoms/nav-item'
import { IoBagOutline } from "react-icons/io5";

export const TopBar = () => {
    return (
        <nav className='flex justify-between items-center max-w-7xl mx-auto py-4'>
            <img src={Logo} alt="logo" className='w-32 h-8' />
            <ul className='flex space-x-4'>
                {["Home", "Our Products", "Blog", "About", "Contact", "Styleguide"].map((label) => <NavItem label={label} />)}
                <Button label="Cart" >
                    <IoBagOutline  className='w-8 h-8 aspect-square' />
                </Button>
            </ul>
        </nav>
    )
}