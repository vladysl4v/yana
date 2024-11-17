import { useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { FaSun, FaMoon } from "react-icons/fa";
import { ClassNameProps } from '../types/props.types';

const ThemeSwitch: React.FC<ClassNameProps> = ({ className = null }) => {
    const [themeState, setThemeState] = useLocalStorage<string>('theme', '');

    useEffect(() => {
        document.documentElement.classList.toggle('dark', themeState === 'dark');
    }, [themeState]);

    return (
        <label className={`inline-flex px-2 py-2 items-center cursor-pointer m-2 ${className}`}>
            <input type="checkbox" onChange={() => setThemeState(themeState === 'dark' ? 'light' : 'dark')} checked={themeState === 'dark'} className="sr-only peer"/>
            <div className="relative w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-600 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-600">
                <FaMoon className="absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 text-yellow-500" />
                <FaSun className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-yellow-500" />
            </div>
            <span className="ms-3 font text-sm md:text-base text-yellow-950 dark:text-yellow-300 select-none">Theme</span>
        </label>
    );
};

export default ThemeSwitch;