import { useState } from 'react';
import { Note, NoteActionTypes, NoteControls, NoteSavedEventArgs } from '../types/note.types';
import { useNotes } from './useNotes';

const useNoteControls = (): NoteControls => {
    const [_, updateNote] = useNotes();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [noteAction, setNoteAction] = useState<NoteActionTypes | null>(null);
    const [selectedNote, setSelectedNote] = useState<Note | null>(null);

    const openNote = (note : Note | null, newNoteAction: NoteActionTypes) => {
        setNoteAction(newNoteAction);
        setSelectedNote(note);
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
        setSelectedNote(null);
    }

    const saveNote = (noteArgs: NoteSavedEventArgs) => {
        updateNote(noteArgs);
        closeModal();
    }

    return {
        noteAction,
        selectedNote,
        isOpen,
        setNoteAction,
        saveNote,
        openNote,
        closeModal,
    };
};

export default useNoteControls;