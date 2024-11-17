import React from 'react';
import { NoteActionTypes } from '../../types/note.types';
import { toDateTimeString } from '../../utils/formats';
import { NoteModalProps } from '../../types/note.types';
import DeleteButton from '../DeleteButton';


const ReadNote: React.FC<NoteModalProps> = ({ controls }) => {
    if (!controls.selectedNote) throw new Error('Selected note is not defined');
    return (
        <div className='block min-h-60 max-w-96'>
            <h2 className="text-xl font-bold mb-4">
                {controls.selectedNote.title}
            </h2>
            <p className='p-2 mb-4 min-h-24'>
                {controls.selectedNote.text}
            </p>
            <div className="mb-5">
                <span className="text-gray-700 dark:text-gray-300 text-sm"
                    title={controls.selectedNote.updatedAt.toLocaleString()}>
                        Updated {toDateTimeString(controls.selectedNote.updatedAt)}
                </span>
            </div>
            <div>
                <DeleteButton
                    className="border-[2px] font-medium inline-flex border-red-800 py-2 text-red-800 dark:text-gray-400 hover:bg-red-800 hover:text-white duration-300 px-3 rounded-xl mr-2"
                    noteId={controls.selectedNote.id} 
                    onDelete={controls.deleteNote} />
                <button
                    className="border-[2px] font-medium border-yellow-950 py-2 text-yellow-950 dark:text-gray-400 hover:bg-yellow-950 hover:text-white duration-300 px-3 rounded-xl mr-2"
                    onClick={controls.closeNote}>
                        Close
                </button>
                <button
                    className="bg-yellow-500 border-[2px] border-yellow-500 text-white px-8 py-2 rounded-xl dark:bg-yellow-600 dark:hover:bg-yellow-700 hover:bg-yellow-600 duration-300"
                    onClick={() => controls.setNoteAction(NoteActionTypes.EDIT)}>
                        Edit
                </button>
            </div>
        </div>
    );
}

export default ReadNote;