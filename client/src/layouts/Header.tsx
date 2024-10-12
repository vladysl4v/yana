import React from 'react';
import { Navigate } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <div className="w-full">
            <header className="border-t-4 border-yellow-400 py-4">
                <div className='border-b-[1px] border-gray-300'>
                    <div className="container mx-auto flex justify-between items-center mb-4">
                        <div className='flex flex-row w-48 cursor-pointer' onClick={() => <Navigate to={'/'} />}>
                            <img src='/favicon.svg' className='max-h-[52px]' alt="Logo" />
                            <div className='my-auto mx-auto'>
                                <span className="my-auto text-xl font-bold">YANA</span>
                                <div className='text-xs'>Yet Another Notes App</div>
                            </div>
                        </div>
                        <div>
                            <button className="bg-transparent py-1 px-3 rounded-lg mr-2 hover:bg-gray-200 transition-all duration-200">Login</button>
                            <button className="bg-transparent py-2 px-4 text-yellow-950 border-2 border-yellow-400 hover:bg-yellow-400 transition-all duration-200 hover:text-white hover:font-thin rounded-xl font-bold mr-2">Register</button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
