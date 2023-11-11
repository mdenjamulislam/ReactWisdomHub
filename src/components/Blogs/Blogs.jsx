import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({ handleAddToBookmark }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <div className='col-span-12 md:col-span-6 w-full h-full md:overflow-y-scroll md:pr-3'>
            <div className='flex flex-col gap-3'>
                {
                    blogs.map(blog => <Blog 
                        key={blog.id} 
                        blog={blog} 
                        handleAddToBookmark={handleAddToBookmark}
                        ></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;