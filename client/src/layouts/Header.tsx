import {useState} from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FaRegStickyNote, FaRegUser, FaInfoCircle } from "react-icons/fa";
import ThemeSwitch from '../components/ThemeSwitch';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    
    const navigateTo = (url: string) => {
        navigate(url);
        setIsMenuOpen(false);
    }
    const navItems = [
        { url: '/notes', text: 'My notes', icon: <FaRegStickyNote className='m-auto mr-2'/>, isDisabled: false},
        { url: '/login', text: 'Login', icon: <FaRegUser className='m-auto mr-2'/>, isDisabled: true},
        { url: '/about', text: 'About', icon: <FaInfoCircle className='m-auto mr-2'/>, isDisabled: true}
    ];
    return (
        <div className='w-full border-t-4 border-yellow-400 text-yellow-950 dark:text-yellow-300'>
        <div className='border-b-2 border-gray-200 dark:border-yellow-700'>
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
                        onClick={() => !item.isDisabled && navigateTo(item.url)}
                        className={`py-2 px-3 ${item.isDisabled ? "cursor-no-drop" : "cursor-pointer"}  hover:bg-yellow-400 inline-flex rounded-xl m-2 duration-300 hover:text-black ${location.pathname === item.url && "bg-yellow-400 dark:text-black"}`}
                    >
                        {item.icon} {item.text}
                    </li>
                    ))}
                    <li>
                        <ThemeSwitch />
                    </li>
                </ul>
                <button onClick={() => setIsMenuOpen(state => !state)} className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 dark:focus:ring-yellow-900 focus:ring-gray-200 ${isMenuOpen && "bg-yellow-400"}`}>
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5 text-yellow-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                {
                    isMenuOpen && (
                    <div className="w-full md:block md:w-auto ">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 dark:bg-dark-primary dark:border-dark-primary dark:bg- rounded-lg bg-gray-200 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                            {navItems.map((item, index) => (
                                <li
                                    key={index}
                                    onClick={() => !item.isDisabled && navigateTo(item.url)}
                                    className={`py-2 hover:text-black mt-1 px-3 flex border-2 dark:border-gray-600 border-gray-300 hover:bg-yellow-400 rounded-xl ${item.isDisabled ? "cursor-no-drop" : "cursor-pointer"} md:p-0 ${location.pathname === item.url ? " bg-yellow-400 dark:bg-yellow-400 dark:text-black" : "dark:bg-dark-light"}`}
                                >
                                    {item.icon} {item.text}
                                </li>
                            ))}
                            <div className='flex mx-auto'>
                                <ThemeSwitch />
                            </div>
                        </ul>
                    </div>
                    )
                }
            </nav>
        </div>
        </div>
    );
};

export default Header;
