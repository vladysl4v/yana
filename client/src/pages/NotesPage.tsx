import React from 'react';
import NoteItem from '../components/NoteItem';
import CreateNote from '../components/CreateNote';
import { usePageTitle } from '../hooks/usePageTitle';

const NotesPage: React.FC = () => {
    usePageTitle('My notes');
    return (
        <div className=''>
            <div className='mx-10'>
                <CreateNote className='w-full md:hidden' />
            </div>
            <div className='flex mb-4 max-w-screen-xl justify-center mx-auto flex-wrap'>
            <NoteItem 
                title="Example" 
                content="This is a sample note content." 
                timestamp={new Date()}
                className='mr-3 h-64 mw-64'
            />
            <NoteItem 
                title="Example" 
                content="This is a sample note content." 
                timestamp={new Date()}
                className='mr-3 h-64 mw-64'
            />
            <NoteItem 
                title="Example" 
                content="This is a sample note content." 
                timestamp={new Date()}
                className='mr-3 h-64 mw-64 flex-3'
            />
            <NoteItem 
                title="Example" 
                content="This is a sample note content." 
                timestamp={new Date()}
                className='mr-3 h-64'
            />
            <NoteItem 
                title="Example" 
                content="This is a sample note content." 
                timestamp={new Date()}
                className='mr-3 h-64'
            />
            <NoteItem 
                title="Example" 
                content="This is a sample note content." 
                timestamp={new Date()}
                className='mr-3 h-64'
            />
            <NoteItem 
                title="Example" 
                content="This is a sample note content." 
                timestamp={new Date()}
                className='mr-3 h-64'
            />
            <CreateNote className='mr-3 h-64 hidden md:flex' />
        </div>
    </div>
    );
};

export default NotesPage;