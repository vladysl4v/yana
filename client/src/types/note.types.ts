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

