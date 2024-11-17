import React from 'react';
import NoteItem from '../components/NoteItem';
import CreateNote from '../components/CreateNote';
import { usePageTitle } from '../hooks/usePageTitle';
import NoteModal from '../components/NoteModal';
import { useNotes } from '../hooks/useNotes';
import useNoteControls from '../hooks/useNoteControls';
import { NoteActionTypes } from '../types/note.types';

const NotesPage: React.FC = () => {
    const modalControls = useNoteControls();
    const [notes] = useNotes();
    usePageTitle('My notes');

    return (
        <>
            <div className='mx-10 mb-4'>
                <CreateNote onClick={() => modalControls.openNote(null, NoteActionTypes.EDIT)} className='w-full md:hidden' />
            </div>
            <div className='flex mb-4 max-w-screen-xl justify-center mx-auto flex-wrap'>
                { 
                    notes.map((note) => 
                        <NoteItem 
                            key={note.id}
                            onOpen={(note) => modalControls.openNote(note, NoteActionTypes.READ)}
                            onEdit={(note) => modalControls.openNote(note, NoteActionTypes.EDIT)}
                            note={note}
                            className='mr-2 mt-2 h-44 w-40 sm:h-64 sm:w-64'/>
                    )
                }
                <CreateNote onClick={() => modalControls.openNote(null, NoteActionTypes.EDIT)} className='h-64 hidden md:flex' />
            </div>
            {
                modalControls.isOpen && <NoteModal controls={modalControls} />
            }
        </>
    );
};

export default NotesPage;