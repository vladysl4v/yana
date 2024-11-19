import { FaSearch, FaPlusCircle } from "react-icons/fa";
import { ClassNameProps } from '../types/props.types';

const ToolBar: React.FC<ClassNameProps> = ({ className = null }) => {
    return (
        <div className={`bg-yellow-400 rounded-2xl h-14 justify-center mx-auto flex ${className}`}>
            <button className='my-auto  hidden md:inline-flex ms-2 px-2 py-1 duration-300 cursor-pointer hover:bg-yellow-500 text-yellow-950 border-yellow-950 border-2 rounded-xl'>
                <FaPlusCircle className="my-auto mr-1" /> Create
            </button>
            <div className='ms-2 my-auto flex w-1/2'>
                <input type='text' placeholder="Search note..." className='border-2 w-full dark:bg-dark-light dark:text-white outline-none border-yellow-950 rounded-r-none rounded-xl p-1' />
                <div className='border-2 border-yellow-950 inline-flex rounded-xl duration-300 rounded-l-none border-l-0 py-1 px-2'>
                    <FaSearch className="my-auto" />
                </div>
            </div>
            <div className="ms-3 my-auto px-2 py-[4.5px] border-yellow-950 border-2 rounded-r-none rounded-xl">Sort</div>
            <div className="my-auto me-2">
                <select className='border-2 dark:bg-dark-light rounded-l-none border-l-0 dark:text-white outline-none border-yellow-950 rounded-xl px-2 py-[6px]'>
                    <option value='newest'>by newest</option>
                    <option value='oldest'>by oldest</option>
                </select>
            </div>
        </div>
    );
};

export default ToolBar;