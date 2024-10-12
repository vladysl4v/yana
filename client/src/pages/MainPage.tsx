import React from 'react';
import NoteItem from '../components/NoteItem';

const MainPage: React.FC = () => {
    const showcaseNoteDate: Date = new Date();
    showcaseNoteDate.setMinutes(showcaseNoteDate.getMinutes() - 15);
    return (
        <div className="mt-7 bg-gray-100 mx-5 items-center text-center justify-center">
            <h1 className="text-yellow-950 text-5xl lg:text-7xl font-bold">
                Nothing revolutionary,<br />
                just notes
            </h1>
            <p className='mt-9 text-yellow-950 text-xl'>
                Create, edit, delete, sync, and share notes with your friends and family.
            </p>
            <div className="mt-[200px]">
                <NoteItem 
                    className='shadow-[0px_0px_39px_17px_#fefcbf]'
                    title="YANA" 
                    content="Write down everything you want to memorize but will eventually forget."
                    timestamp={showcaseNoteDate} 
                />
            </div>

        </div>
    );
};

export default MainPage;