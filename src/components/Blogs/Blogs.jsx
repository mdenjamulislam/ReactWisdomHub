import React, { useEffect, useState } from 'react';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <div className='col-span-12 md:col-span-6'>
            {
                blogs.map
            }
        </div>
    );
};

export default Blogs;