import React from 'react';
import NoteItem from '../components/NoteItem';
import CreateNote from '../components/CreateNote';
import { usePageTitle } from '../hooks/usePageTitle';
import { useState } from 'react';
import NoteModal from '../components/NoteModal';
import { Note } from '../types/note.types';
import { useNotes } from '../hooks/useNotes';

const NotesPage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedNote, setSelectedNote] = useState<Note | undefined>();
    const [notes, updateNote] = useNotes();
    usePageTitle('My notes');
    return (
        <div className=''>
            <div className='mx-10 mb-4'>
                                <CreateNote 
                    onClick={() => {
                        setSelectedNote(undefined);
                        setIsModalOpen(true);
                    }}
                    className='w-full md:hidden' />
            </div>
            <div className='flex mb-4 max-w-screen-xl justify-center mx-auto flex-wrap'>
                { 
                    notes.map((note) => {
                        return <NoteItem 
                                    key={note.id}
                                    onClick={() => {
                                        setSelectedNote(note);
                                        setIsModalOpen(true);
                                    }}
                                    note={note}
                                    className='mr-2 mt-2 h-44 w-40 sm:h-64 sm:w-64'
                                />
                        }
                    )
                }
                <CreateNote 
                    onClick={() => {
                        setSelectedNote(undefined);
                        setIsModalOpen(true);
                    }}
                    className='h-64 hidden md:flex' />
            </div>
            <NoteModal note={selectedNote} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSave={
                (noteArgs) => {
                        updateNote(noteArgs); 
                        setIsModalOpen(false);
                    } 
                } />
        </div>
    );
};

export default NotesPage;