import React from 'react';
import { toDateTimeString } from '../utils/formats';
import { WithClasses } from '../types/basicProps';
import { FaPen } from "react-icons/fa";

interface NoteItemProps {
    title: string;
    content: string;
    timestamp: Date;
}

const NoteItem: React.FC<WithClasses<NoteItemProps>> = ({ title, content, timestamp, className = null}) => {
    return (
        <div className={`border-4 shadow-xl grid border-yellow-400 bg-yellow-50 dark:bg-dark-light dark:border-yellow-900 rounded-3xl overflow-hidden ${className}`}>
            <div className="px-6 py-4">
                <div className="font-bold text-lg md:text-xl mb-2 dark:text-yellow-500">{title}</div>
                <p className="text-gray-700 max-h-16 sm:max-h-36 dark:text-yellow-300 text-sm md:text-base overflow-hidden">
                    {content}
                </p>
            </div>
            <div className='self-end block items-end'>
                <div className="text-center sm:float-left sm:ms-3 my-2 text-gray-600 dark:text-gray-400 text-sm" title={timestamp.toLocaleString()}>{toDateTimeString(timestamp)}</div>
                <FaPen className='hidden sm:flex float-right mr-2 mt-2 h-5 w-5 hover:h-6 hover:w-6 duration-200 cursor-pointer text-yellow-800' />
            </div>
        </div>
    );
};

export default NoteItem;