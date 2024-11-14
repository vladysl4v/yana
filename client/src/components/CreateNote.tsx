import React from 'react';
import { FaPlusCircle } from "react-icons/fa";

type CreateItemProps = {
    className?: string;
}

const CreateNote: React.FC<CreateItemProps> = ({className = null}) => {
    return (
        <div className={`w-64 border-4 bg-yellow-200 border-yellow-400 py-2 rounded-3xl overflow-hidden my-4 ${className}`}>
            <div className='flex h-full m-auto'>
                <FaPlusCircle className='m-auto h-10 w-10 hover:h-16 hover:w-16 duration-300 cursor-pointer text-yellow-800' />
            </div>
        </div>
    );
};

export default CreateNote;