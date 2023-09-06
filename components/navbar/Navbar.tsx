import { HomeIcon } from "@primer/octicons-react";
import Link from 'next/link'
import ActiveLink from "../active-link/ActiveLink";

const navItems = [
    {
        path: "/about",
        name: "About"
    },
    {
        path: "/pricing",
        name: "Pricing"
    },
    {
        path: "/contact",
        name: "Contact"
    }

]

export default function Navbar() {
    return (
        <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
            <Link href={"/"} className="flex items-center">
                <HomeIcon className="mr-2"/>
                <span className='flex flex-1'>Home</span>
            </Link>

            <div className='flex flex-1' ></div>

            {
                navItems.map( navItem => (
                    <ActiveLink 
                        key={navItem.path} 
                        {...navItem}  
                        />
                ))
            }  
        </nav>
    )
}
