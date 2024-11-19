import React from 'react';
import { FaPlusCircle } from "react-icons/fa";
import { WithClasses } from '../types/props.types';

type CreateNoteProps = {
    onClick: () => void;
}

const CreateNote: React.FC<WithClasses<CreateNoteProps>> = ({ onClick, className = null }) => {
    return (
        <div className={`w-64 border-4 bg-yellow-200 border-yellow-400 dark:bg-dark-primary py-2 rounded-3xl overflow-hidden my-2 ${className}`}>
            <div className='flex h-full m-auto'>
                <FaPlusCircle onClick={onClick} className='m-auto h-10 w-10 hover:h-16 hover:w-16 duration-300 cursor-pointer text-yellow-800' />
            </div>
        </div>
    );
};

export default CreateNote;