import React from 'react';
import NoteItem from '../components/NoteItem';
import CreateNote from '../components/CreateNote';
import { usePageTitle } from '../hooks/usePageTitle';

const NotesPage: React.FC = () => {
    usePageTitle('My notes');
    const items = Array(10).fill('', 0, 10);
    return (
        <div className=''>
            <div className='mx-10 mb-4'>
                <CreateNote className='w-full md:hidden' />
            </div>
            <div className='flex mb-4 max-w-screen-xl justify-center mx-auto flex-wrap'>
                { 
                    items.map((_, index) => (
                        <NoteItem 
                            key={index}
                            title={"Example " + index}
                            content="This is a sample note content." 
                            timestamp={new Date()}
                            className='mr-2 mt-2 h-44 w-40 sm:h-64 sm:w-64'
                        />)  
                    )
                }
                <CreateNote className='h-64 hidden md:flex' />
            </div>
        </div>
    );
};

export default NotesPage;