import React from 'react';

const MainPage: React.FC = () => {
    const showcaseNoteDate: Date = new Date();
    showcaseNoteDate.setMinutes(showcaseNoteDate.getMinutes() + 5);
    return (
        <div className="mt-7 text-yellow-950 dark:text-yellow-300 mx-5 items-center text-center justify-center">
            <h1 className=" text-5xl lg:text-7xl font-bold">
                Nothing revolutionary,<br />
                just notes
            </h1>
            <p className='mt-9 text-xl'>
                Create, edit, delete, sync, and share notes with your friends and family.
            </p>
            <div className="mt-[200px]">
                <div className="border-4 grid border-yellow-400 bg-yellow-50 dark:bg-dark-light dark:border-yellow-900 rounded-3xl overflow-hidden mx-auto h-64 w-64">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 dark:text-yellow-500">YANA</div>
                        <p className="text-gray-700 max-h-36 dark:text-yellow-300 text-base overflow-hidden">
                            Write down everything you want to memorize but will eventually forget.
                        </p>
                    </div>
                    <div className='self-end block items-end'>
                        <div className="text-center sm:float-left sm:ms-3 my-2 text-gray-600 dark:text-gray-400 text-sm" title={showcaseNoteDate.toLocaleString()}>Just as you registered</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MainPage;