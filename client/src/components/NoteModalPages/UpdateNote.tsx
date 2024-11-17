import React, { useState, useEffect} from 'react';
import { NoteSavedEventArgs } from '../../types/note.types';
import { toDateTimeString } from '../../utils/formats';
import { NoteModalProps } from '../../types/note.types';


const UpdateNote: React.FC<NoteModalProps> = ({ controls }) => {
    const [title, setTitle] = useState<string>(controls.selectedNote?.title ?? '');
    const [content, setContent] = useState<string>(controls.selectedNote?.text ?? '');
    useEffect(() => {
        setTitle(controls.selectedNote?.title ?? '');
        setContent(controls.selectedNote?.text ?? '');
    }, [controls.selectedNote]);

    const handleSave = () => {
        const noteArgs: NoteSavedEventArgs = {
            id: controls.selectedNote?.id,
            title: title,
            text: content,
        };
        controls.saveNote(noteArgs);
    };
    return (
        <>
            <h2 className="text-xl font-bold mb-4">{controls.selectedNote ? 'Edit Note' : 'Create New Note'}</h2>
            <input
                type="text"
                className='w-full p-2 mb-4 font-bold border-gray-300 dark:border-yellow-500 border-2 dark:bg-dark-light rounded-xl outline-yellow-500 dark:focus:outline-none'
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                className='w-full p-2 mb-4 min-h-2/3 dark:bg-dark-light border-gray-300 dark:border-yellow-500 border-2 rounded-xl outline-yellow-500 dark:focus:outline-none'
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            {
                controls.selectedNote && (
                    <div className="mb-5">
                        <span className="text-gray-700 dark:text-gray-300 text-sm">Updated {toDateTimeString(controls.selectedNote.updatedAt)}</span>
                    </div>)
            }
            <div className="flex relative bottom-0 justify-end">
                <button
                    className="border-[2px] font-medium border-yellow-950 py-2 text-yellow-950 dark:text-gray-400 hover:bg-yellow-950 hover:text-white duration-300 px-3 rounded-xl mr-2"
                    onClick={controls.closeNote}>
                        Cancel
                </button>
                <button
                    className="bg-yellow-500 text-white px-8 py-2 rounded-xl dark:bg-yellow-600 dark:hover:bg-yellow-700 hover:bg-yellow-600 duration-300"
                    onClick={handleSave}>
                        Save
                </button>
                
            </div>
        </>
    );
}

export default UpdateNote;