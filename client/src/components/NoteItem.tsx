import React from 'react';
import { toDateTimeString } from '../utils/formats';
import { WithClasses } from '../types/props.types';
import { FaPen } from "react-icons/fa";
import { Note } from '../types/note.types';

interface NoteItemProps {
    note: Note;
    onOpen: (note : Note) => void;
    onEdit: (note : Note) => void;
}

const NoteItem: React.FC<WithClasses<NoteItemProps>> = ({ note, onOpen, onEdit, className = null}) => {
    return (
        <div onClick={() => onOpen(note)} className={`border-4 select-none shadow-xl grid border-yellow-400 bg-yellow-50 dark:bg-dark-light  dark:border-yellow-900 rounded-3xl ${className}`}>
            <div className="px-6 py-4">
                <p className="max-h-12 font-bold text-lg md:text-xl md:max-h-14 mb-2 dark:text-yellow-500 overflow-clip">
                    {note.title}
                </p>
                <p className="text-gray-700 overflow-clip max-h-10 sm:max-h-28 dark:text-yellow-300 text-sm md:text-base">
                    {note.text}
                </p>
            </div>
            <div className='self-end block items-end'>
                <div className="text-center sm:float-left sm:ms-3 my-2 text-gray-600 dark:text-gray-400 text-sm" 
                    title={note.updatedAt.toLocaleString()}>
                        {toDateTimeString(note.updatedAt)}
                </div>
                <FaPen onClick={(e) => {e.stopPropagation(); onEdit(note)}} className='hidden sm:flex float-right mr-2 mt-2 h-5 w-5 hover:h-6 hover:w-6 duration-200 cursor-pointer text-yellow-800' />
            </div>
        </div>
    );
};

export default NoteItem;