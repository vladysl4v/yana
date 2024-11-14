import React from 'react';
import { toDateTimeString } from '../utils/formats';

interface NoteItemProps {
    title: string;
    content: string;
    timestamp: Date;
    className?: string;
}

const NoteItem: React.FC<NoteItemProps> = ({ title, content, timestamp, className = null }) => {
    return (
        <div className={`border-4 shadow-xl max-w-64 border-yellow-400 py-2 bg-yellow-50 rounded-3xl overflow-hidden my-4 ${className}`}>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                    {content}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="text-gray-600 text-sm">{toDateTimeString(timestamp)}</span>
            </div>
        </div>
    );
};

export default NoteItem;