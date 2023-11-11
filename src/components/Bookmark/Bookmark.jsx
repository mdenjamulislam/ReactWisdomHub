import React from 'react';

const Bookmark = ({ blog }) => {
    const { blog_title } = blog;
    return (
        <div className='flex flex-col gap-2 pt-3'>
            <h2 className='text-sm md:text-base font-semibold hover:text-red-500'><a href="#">{blog_title}</a></h2>
        </div>
    );
};

export default Bookmark;