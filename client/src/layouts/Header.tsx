import {useState} from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FaRegStickyNote, FaRegUser, FaInfoCircle } from "react-icons/fa";

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const navigateTo = (url: string) => {
        navigate(url);
        setIsMenuOpen(false);
    }
    const navItems = [
        { url: '/notes', text: 'My notes', icon: <FaRegStickyNote className='m-auto mr-2'/>},
        { url: '/login', text: 'Login', icon: <FaRegUser className='m-auto mr-2'/>},
        { url: '/about', text: 'About', icon: <FaInfoCircle className='m-auto mr-2'/>}
    ];
    return (
        <div className='w-full border-t-4 border-yellow-400 text-yellow-950'><div className='border-b-2 border-gray-200'>
            <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
                <div className="flex w-48 items-center space-x-3 rtl:space-x-reverse">
                    <img src="/favicon.svg" className="max-h-12 cursor-pointer" alt="YANA Logo" onClick={()=> navigate('/')}/>
                    <NavLink to={'/'} className='my-auto mx-auto'>
                        <span className="my-auto text-xl font-bold">YANA</span>
                        <div className='text-xs'>Yet Another Notes App</div>
                    </NavLink>
                </div>
                <ul className='hidden md:flex'>
                    {navItems.map((item, index) => (
                    <li
                        key={index}
                        onClick={() => navigateTo(item.url)}
                        className={`py-2 px-3 hover:bg-yellow-400 inline-flex rounded-xl m-2 cursor-pointer duration-300 hover:text-black ${location.pathname === item.url && "bg-yellow-400"}`}
                    >
                        {item.icon} {item.text}
                    </li>
                    ))}
                </ul>
                <button onClick={() => setIsMenuOpen(state => !state)} className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 ${isMenuOpen && "bg-yellow-400"}`}>
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                {
                    isMenuOpen && (
                    <div className="w-full md:block md:w-auto ">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                            {navItems.map((item, index) => (
                                <li
                                    key={index}
                                    onClick={() => navigateTo(item.url)}
                                    className={`py-2 mt-1 px-3 flex  border-2 hover:bg-yellow-400 rounded md:bg-transparent md:p-0 ${location.pathname === item.url && "bg-yellow-400"}`}
                                >
                                    {item.icon} {item.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                    )
                }
            </nav>
        </div></div>
    );
};

export default Header;
