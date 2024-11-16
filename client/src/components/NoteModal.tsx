import React, { useEffect, useState } from 'react';
import { Note, NoteSavedEventArgs } from '../types/note.types';
import { toDateTimeString } from '../utils/formats';

interface NoteModalProps {
    isOpen: boolean;
    onClose: () => void;
    note?: Note | null;
    onSave: (args : NoteSavedEventArgs) => void;
}

const NoteModal: React.FC<NoteModalProps> = ({ isOpen, onClose, note, onSave }) => {
    const [title, setTitle] = useState(note?.title ?? '');
    const [content, setContent] = useState(note?.text ?? '');
    useEffect(() => {
        setTitle(note?.title ?? '');
        setContent(note?.text ?? '');
    }, [note]);

    const handleSave = () => {
        const noteArgs: NoteSavedEventArgs = {
            id: note?.id,
            title: title,
            text: content,
        };
        onSave(noteArgs);
    };

    return (
        <div className={`fixed inset-0 flex items-center justify-center ${isOpen ? 'block' : 'hidden'}`}>
            <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
            <div className="bg-yellow-50 dark:bg-dark-light text-yellow-950 dark:text-yellow-400 rounded-3xl border-4 dark:border-yellow-800 border-yellow-500 shadow-lg p-6 z-10 w-65">
                <h2 className="text-xl font-bold mb-4">{note ? 'Edit Note' : 'Create New Note'}</h2>
                <input
                    type="text"
                    className="w-full p-2 mb-4 dark:bg-dark-light border-gray-300 dark:border-yellow-500 border-2 rounded-xl outline-yellow-500 dark:focus:outline-none" 
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    className="w-full p-2 mb-4 dark:bg-dark-light border-gray-300 dark:border-yellow-500 border-2 rounded-xl outline-yellow-500 dark:focus:outline-none"
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                {
                    note && (
                        <div className="mb-5">
                            <span className="text-gray-700 dark:text-gray-300 text-sm">Created: {toDateTimeString(note.updatedAt)}</span>
                        </div>)
                }
                <div className="flex justify-end">
                    <button
                        className="border-[2px] font-medium border-yellow-950 text-yellow-950 dark:text-gray-400 hover:bg-yellow-950 hover:text-white duration-300 px-3 rounded-xl mr-2"
                        onClick={onClose}>Cancel</button>
                    <button
                        className="bg-yellow-500 text-white px-8 py-2 rounded-xl dark:bg-yellow-600 dark:hover:bg-yellow-700 hover:bg-yellow-600 duration-300"
                        onClick={handleSave}>Save</button>
                </div>
            </div>
        </div>
    );
};

export default NoteModal;