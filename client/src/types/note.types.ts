export type Note = {
    id: string;
    title: string;
    text: string;
    updatedAt: Date;
    author: string;
}

export type NoteSavedEventArgs = {
    id: string | undefined;
    title: string;
    text: string;
}

export type NoteControls = {
    noteAction: NoteActionTypes | null;
    selectedNote: Note | null;
    isOpen: boolean;
    setNoteAction: React.Dispatch<React.SetStateAction<NoteActionTypes | null>>;
    saveNote: (noteArgs: NoteSavedEventArgs) => void;
    openNote: (note : Note | null, noteAction: NoteActionTypes) => void;
    closeModal: () => void;
}

export enum NoteActionTypes {
    EDIT,
    READ
}

export type NoteModalProps = {
    controls: NoteControls
}
