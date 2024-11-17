import React from 'react';
import { NoteActionTypes, NoteControls } from '../types/note.types';
import ReadNote from './NoteModalPages/ReadNote';
import UpdateNote from './NoteModalPages/UpdateNote';

interface NoteModalProps {
    controls: NoteControls
}

const NoteModal: React.FC<NoteModalProps> = ({ controls }) => {

    return (
        <div className='fixed inset-0 flex items-center justify-center'>
            <div className="fixed inset-0 bg-black opacity-50" onClick={controls.closeNote}></div>
            <div className="bg-yellow-50 dark:bg-dark-light text-yellow-950 dark:text-yellow-400 rounded-3xl border-4 dark:border-yellow-800 border-yellow-500 shadow-lg p-6 z-10 max-h-96">
                { 
                    controls.noteAction === NoteActionTypes.READ ? (
                        <ReadNote controls={controls} />
                    ) :
                    controls.noteAction === NoteActionTypes.EDIT ? (
                        <UpdateNote controls={controls} />
                    ) : null
                }
            </div>
        </div>
    );
};

export default NoteModal;