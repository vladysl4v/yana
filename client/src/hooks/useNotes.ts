import { useLocalStorage } from './useLocalStorage';
import { Note, NoteSavedEventArgs } from '../types/note.types';
import { v4 as newUuid } from 'uuid';

export function useNotes() : [Note[], (noteArgs : NoteSavedEventArgs) => void, (id: string) => void] {
    const [notes, setNotes] = useLocalStorage<Note[]>('local-notes', []);

    const updateNote = (noteArgs : NoteSavedEventArgs) => {
        if (noteArgs.id != null)
        {
            const index = notes.findIndex(n => n.id === noteArgs.id);
            if (index !== -1) {
                const note: Note = { 
                    id: noteArgs.id,
                    title: noteArgs.title, 
                    text: noteArgs.text,
                    updatedAt: new Date(),
                    author: 'admin' 
                };
                notes[index] = note
                setNotes([...notes]);
            }

            return;
        }
        const note: Note = {
            id: newUuid(),
            title: noteArgs.title,
            text: noteArgs.text,
            updatedAt: new Date(),
            author: 'admin',
        };
        setNotes([...notes, note]);
    };

    const removeNote = (id: string) => {
        setNotes(notes.filter(note => note.id !== id));
    };
    return [
        notes,
        updateNote,
        removeNote,
    ];
}