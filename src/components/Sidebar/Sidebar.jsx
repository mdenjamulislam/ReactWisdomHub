import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Sidebar = ({ bookmark }) => {
    return (
        <div className='col-span-12 md:col-span-3 bg-slate-800 shadow-lg p-3 rounded-md h-full md:overflow-y-scroll'>
            <h2 className='text-xl md:text-2xl font-bold text-center pb-2 border-b border-b-slate-400'>Bookmark</h2>
            {
                bookmark.map(blog => <Bookmark key={blog.id} blog={blog}></Bookmark>)
            }
        </div>
    );
};

export default Sidebar;