import React, { useState, useEffect} from 'react';
import { FaSpinner } from "react-icons/fa";
import { WithClasses } from '../types/props.types';

type DeleteButtonProps = {
    noteId : string;
    onDelete: (noteId: string) => void;
}

const DeleteButton: React.FC<WithClasses<DeleteButtonProps>> = ({ noteId, onDelete, className = null }) => {
    const [timeLeft, setTimeLeft] = useState<number | null>(null);
    useEffect(() => {
        if(!timeLeft) {
            return;
        }
        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);
        return () => clearInterval(intervalId);
    }, [timeLeft]);
    
    if (timeLeft === null) {
        return (
            <button
                className={`${className}`}
                onClick={() => setTimeLeft(3)}>
                    Delete
            </button>
        );
    }
    return (
        <button
            className={`${timeLeft !== 0 && "disabled cursor-not-allowed"} ${className}`}
                onClick={() => onDelete(noteId)}>
               {timeLeft !== 0 && <FaSpinner className='animate-spin my-auto mr-1' />} Confirm {timeLeft !== 0 && `(${timeLeft})`}
        </button>
    );
}

export default DeleteButton;