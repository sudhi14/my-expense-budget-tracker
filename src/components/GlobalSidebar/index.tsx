import { NavLink } from 'react-router-dom'
import GlobalSidebarItems from '../GlobalSidebarItems'
import {
    MdOutlineSpaceDashboard,
    MdSpaceDashboard,
    MdOutlineSettings,
    MdOutlineLogout,
} from 'react-icons/md'
import { FaSearchDollar } from 'react-icons/fa'

const GlobalSidebar = () => {
    const navItems = [
        {
            title: 'Dashboard',
            link: '/home/dashboard',
            icon: <MdOutlineSpaceDashboard size={25} />,
        },
        {
            title: 'Finances',
            link: '/home/finances',
            icon: <FaSearchDollar size={25} />,
        },
        {
            title: 'Settings',
            link: '/home/settings',
            icon: <MdOutlineSettings size={25} />,
        },
        {
            title: 'Logout',
            link: '/',
            icon: <MdOutlineLogout size={25} />,
        },
    ]

    return (
        <div className="fixed inset-0 flex flex-col w-64 h-screen shadow-lg bg-gray-50 ">
            <section className="flex flex-col h-screen w-full">
                {navItems.map((curr) => (
                    <GlobalSidebarItems {...curr} />
                ))}
                <div className="mb-10 mt-auto flex gap-5">
                    <MdOutlineLogout size={25} />
                    <NavLink to="/">Logout</NavLink>
                </div>
            </section>
        </div>
    )
}

export default GlobalSidebar
